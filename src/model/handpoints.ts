type keypoint = {
  x: number
  y: number
  name:
    | 'wrist'
    | 'thumb_cmc'
    | 'thumb_mcp'
    | 'thumb_ip'
    | 'thumb_tip'
    | 'index_finger_mcp'
    | 'index_finger_pip'
    | 'index_finger_dip'
    | 'index_finger_tip'
    | 'middle_finger_mcp'
    | 'middle_finger_pip'
    | 'middle_finger_dip'
    | 'middle_finger_tip'
    | 'ring_finger_mcp'
    | 'ring_finger_pip'
    | 'ring_finger_dip'
    | 'ring_finger_tip'
    | 'pinky_finger_mcp'
    | 'pinky_finger_pip'
    | 'pinky_finger_dip'
    | 'pinky_finger_tip'
}

interface HandPoint {
  score: number
  handedness: 'Right' | 'Left'
  keypoints: Array<keypoint>
}

export type { HandPoint }
