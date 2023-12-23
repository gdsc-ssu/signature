import { useEffect, useRef, useState } from 'react'

import { useWindowDimensions } from '@/hooks/common/getWindowDimensions'
import { useAnimationFrame } from '@/hooks/common/useAnimationFrame'
import { HandPoint } from '@/model/handpoints'
import { Vector2 } from '@/model/vector'
import { locMapper } from '@/util/mapper'
import { setupDetector } from '@/util/tfModel'
import { setupVideoCam } from '@/util/video'

import { Cursor } from '../Cursor/Cursor'

export const HandTrack = () => {
  const [handPosition, setHandPosition] = useState<Vector2>({ x: 0, y: 0 })

  const { height, width } = useWindowDimensions()
  const $video = useRef<HTMLVideoElement>()
  const tracker = useRef<any>()

  useEffect(() => {
    ;(async () => {
      $video.current = await setupVideoCam()

      // handtracking model
      tracker.current = await setupDetector({
        runtime: 'mediapipe',
        modelType: 'full',
        maxHands: 2,
        solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/hands/',
      })
    })()
  }, [])

  useEffect(() => {
    const handMoveEvent = new CustomEvent('handmove', {
      detail: {
        pos: { ...handPosition },
      },
      bubbles: true,
      cancelable: true,
    })
    document.dispatchEvent(handMoveEvent)
  }, [handPosition])

  useAnimationFrame(async () => {
    if (!tracker.current) return
    const hands = (await tracker.current.estimateHands($video.current, {
      flipHorizontal: true,
    })) as Array<HandPoint>

    const keyPointers = hands.map((hand) => hand.keypoints)
    if (keyPointers.length !== 0) {
      const indexFingerLoc = keyPointers[0].filter((kp) => kp.name === 'index_finger_tip')[0]
      const x = locMapper(640, width, indexFingerLoc.x)
      const y = locMapper(480, height, indexFingerLoc.y)

      setHandPosition({ x, y })

      console.log('indexFingerLoc', x, y)
    }
  }, true)

  return (
    <div>
      <video
        style={{
          visibility: 'hidden',
          transform: 'scaleX(-1)',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
        id="video"
        playsInline
      />
      <Cursor pos={handPosition} />
    </div>
  )
}
