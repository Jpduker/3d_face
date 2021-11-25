/* eslint-disable no-multi-spaces */

export const kpt: Array<string> = [ // keypoints defined in blazepose
  'nose',            //  0
  'leftEyeInside',   //  1
  'leftEye',         //  2
  'leftEyeOutside',  //  3
  'rightEyeInside',  //  4
  'rightEye',        //  5
  'rightEyeOutside', //  6
  'leftEar',         //  7
  'rightEar',        //  8
  'leftMouth',       //  9
  'rightMouth',      // 10
  'leftShoulder',    // 11
  'rightShoulder',   // 12
  'leftElbow',       // 13
  'rightElbow',      // 14
  'leftWrist',       // 15
  'rightWrist',      // 16
  'leftPinky',       // 17
  'rightPinky',      // 18
  'leftIndex',       // 19
  'rightIndex',      // 20
  'leftThumb',       // 21
  'rightThumb',      // 22
  'leftHip',         // 23
  'rightHip',        // 24
  'leftKnee',        // 25
  'rightKnee',       // 26
  'leftAnkle',       // 27
  'rightAnkle',      // 28
  'leftHeel',        // 29
  'rightHeel',       // 30
  'leftFoot',        // 31
  'rightFoot',       // 32
  'bodyCenter',      // 33
  'bodyTop',         // 34
  'leftPalm',        // 35 // z-coord not ok
  'leftHand',        // 36 // z-coord not ok // similar to wrist
  'rightPalm',       // 37 // z-coord not ok
  'rightHand',       // 38 // z-coord not ok // similar to wrist
];

export const connected: Record<string, string[]> = {
  leftLeg: ['leftHip', 'leftKnee', 'leftAnkle', 'leftHeel', 'leftFoot'],
  rightLeg: ['rightHip', 'rightKnee', 'rightAnkle', 'rightHeel', 'rightFoot'],
  torso: ['leftShoulder', 'rightShoulder', 'rightHip', 'leftHip', 'leftShoulder', 'rightShoulder'],
  leftArm: ['leftShoulder', 'leftElbow', 'leftWrist', 'leftPalm'],
  rightArm: ['rightShoulder', 'rightElbow', 'rightWrist', 'rightPalm'],
  leftEye: ['leftEyeInside', 'leftEye', 'leftEyeOutside'],
  rightEye: ['rightEyeInside', 'rightEye', 'rightEyeOutside'],
  mouth: ['leftMouth', 'rightMouth'],
  // leftHand: ['leftHand', 'leftPalm', 'leftPinky', 'leftPalm', 'leftIndex', 'leftPalm', 'leftThumb'],
  // rightHand: ['rightHand', 'rightPalm', 'rightPinky', 'rightPalm', 'rightIndex', 'rightPalm', 'rightThumb'],
};

export const bones: Array<string> = [ // keypoints defined in babylon `skeleton.bones[].name`
  'Hips',
  'Spine',
  'Spine1',
  'Spine2',
  'Neck',
  'Head',
  'HeadTop_End',
  'LeftEye',
  'RightEye',
  'LeftShoulder',
  'LeftArm',
  'LeftForeArm',
  'LeftHand',
  'LeftHandMiddle1',
  'LeftHandMiddle2',
  'LeftHandMiddle3',
  'LeftHandMiddle4',
  'LeftHandThumb1',
  'LeftHandThumb2',
  'LeftHandThumb3',
  'LeftHandThumb4',
  'LeftHandIndex1',
  'LeftHandIndex2',
  'LeftHandIndex3',
  'LeftHandIndex4',
  'LeftHandRing1',
  'LeftHandRing2',
  'LeftHandRing3',
  'LeftHandRing4',
  'LeftHandPinky1',
  'LeftHandPinky2',
  'LeftHandPinky3',
  'LeftHandPinky4',
  'RightShoulder',
  'RightArm',
  'RightForeArm',
  'RightHand',
  'RightHandMiddle1',
  'RightHandMiddle2',
  'RightHandMiddle3',
  'RightHandMiddle4',
  'RightHandThumb1',
  'RightHandThumb2',
  'RightHandThumb3',
  'RightHandThumb4',
  'RightHandIndex1',
  'RightHandIndex2',
  'RightHandIndex3',
  'RightHandIndex4',
  'RightHandRing1',
  'RightHandRing2',
  'RightHandRing3',
  'RightHandRing4',
  'RightHandPinky1',
  'RightHandPinky2',
  'RightHandPinky3',
  'RightHandPinky4',
  'RightUpLeg',
  'RightLeg',
  'RightFoot',
  'RightToeBase',
  'RightToe_End',
  'LeftUpLeg',
  'LeftLeg',
  'LeftFoot',
  'LeftToeBase',
  'LeftToe_End',
];
