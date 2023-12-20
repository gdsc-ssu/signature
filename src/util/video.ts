const setupVideoCam = async () => {
  const video = document.getElementById('video') as HTMLVideoElement
  if (!video) {
    throw Error('Should Contain Video HTML Element(#video) in Your App')
  }
  const stream = await window.navigator.mediaDevices.getUserMedia({ video: true })

  video.srcObject = stream
  await new Promise((resolve) => {
    video.onloadedmetadata = () => {
      resolve('')
    }
  })
  video.play()

  video.width = video.videoWidth
  video.height = video.videoHeight

  return video
}

export { setupVideoCam }
