import { useEffect, useRef } from 'react'

const useAnimationFrame = (callback: (t: DOMHighResTimeStamp) => void, enable: boolean = false) => {
  const frameRef = useRef<number>(0)
  const requestRef = useRef<number>(0)

  const animate = (t: DOMHighResTimeStamp) => {
    if (requestRef.current != undefined) {
      callback(t)
    }

    frameRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    if (enable) {
      frameRef.current = requestAnimationFrame(animate)
    } else {
      cancelAnimationFrame(frameRef.current)
    }

    return () => cancelAnimationFrame(frameRef.current)
  }, [enable])
}

export { useAnimationFrame }
