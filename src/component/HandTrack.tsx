import { useAnimationFrame } from '../hooks/common/useAnimationFrame'
import { HandPoint } from '@/model/handpoints'
import { setupDetector } from '../util/tfModel'
import { setupVideoCam } from '../util/video'
import { useEffect, useRef } from 'react'
import { locMapper } from '../util/mapper'
import useWindowDimensions from '../hooks/common/getWindowDimensions'

const HandTrack = () => {
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

  useAnimationFrame(async () => {
    const hands = (await tracker.current.estimateHands($video.current, {
      flipHorizontal: true,
    })) as Array<HandPoint>

    const keyPointers = hands.map((hand) => hand.keypoints)
    if (keyPointers.length !== 0) {
      const indexFingerLoc = keyPointers[0].filter((kp) => kp.name === 'index_finger_tip')[0]
      console.log(
        'indexFingerLoc',
        locMapper(640, width, indexFingerLoc.x),
        locMapper(480, height, indexFingerLoc.y)
      )
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
    </div>
  )
}

export default HandTrack
