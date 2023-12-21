import { useRef } from 'react'

import { useAnimationFrame } from '@/common/useAnimationFrame'
import { HandPoint } from '@/model/handpoints'
import { setupDetector } from '@/util/tfModel'
import { setupVideoCam } from '@/util/video'

const appendHiddenVideoDomToBody = () => {
  const videoDom = document.createElement('video')
  videoDom.setAttribute(
    'style',
    'visibility: hidden; transform: scaleX(-1); position: absolute; top: 0; left: 0;'
  )
  videoDom.setAttribute('playsInline', 'true')
  videoDom.setAttribute('id', 'video')

  document.body.appendChild(videoDom)
}

const useHandTracking = async () => {
  const $video = useRef<HTMLVideoElement>()
  const tracker = useRef<any>()

  $video.current = document.getElementById('video') as HTMLVideoElement
  // 비디오 돔을 생성하고,
  if (!$video.current) {
    appendHiddenVideoDomToBody()
    $video.current = document.getElementById('video') as HTMLVideoElement
  }

  // 셀피캠 스트리밍
  $video.current = await setupVideoCam()

  // handtracking model
  tracker.current = await setupDetector({
    runtime: 'mediapipe',
    modelType: 'full',
    maxHands: 2,
    solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/hands/',
  })

  // useAnimationFrame(async () => {
  //   const hands = (await tracker.current.estimateHands($video.current, {
  //     flipHorizontal: true,
  //   })) as Array<HandPoint>

  //   const keyPointers = hands.map((hand) => hand.keypoints)
  //   if (keyPointers.length !== 0) {
  //     const indexFingerLoc = keyPointers[0].filter((kp) => kp.name === 'index_finger_tip')[0]
  //     console.log('indexFingerLoc', indexFingerLoc.x, indexFingerLoc.y)
  //   }
  // })
}

export { useHandTracking }
