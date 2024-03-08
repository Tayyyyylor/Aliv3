import { useLottie, useLottieInteractivity } from 'lottie-react'
import introAnim from '../../public/AnimationALI.json'

const options = {
  animationData: introAnim,
}

const Example = () => {
  const lottieObj = useLottie(options)
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: 'scroll',
    actions: [
      {
        visibility: [0, 0.45],
        type: 'stop',
        frames: [0],
      },
      {
        visibility: [0.45, 1],
        type: 'seek',
        frames: [0, 300],
      },
    ],
  })

  return Animation
}

export default Example
