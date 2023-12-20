import * as handPoseDetection from '@tensorflow-models/hand-pose-detection'

interface Params {
  runtime: 'mediapipe' | 'tfjs'
  modelType: 'full'
  maxHands: number
  solutionPath: string
}

const setupDetector = async (detectOptions: Params) => {
  const model = handPoseDetection.SupportedModels.MediaPipeHands
  const detector = await handPoseDetection.createDetector(model, detectOptions)

  return detector
}

export { setupDetector }
