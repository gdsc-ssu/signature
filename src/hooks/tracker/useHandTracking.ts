import { useRef } from 'react'

import { setupDetector } from '@/util/tfModel'
import { setupVideoCam } from '@/util/video'

export const appendHiddenVideoDomToBody = () => {
  const videoDom = document.createElement('video')
  videoDom.setAttribute(
    'style',
    'visibility: hidden; transform: scaleX(-1); position: absolute; top: 0; left: 0;'
  )
  videoDom.setAttribute('playsInline', 'true')
  videoDom.setAttribute('id', 'video')

  document.body.appendChild(videoDom)
}

export const useHandTracking = async () => {
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
}
