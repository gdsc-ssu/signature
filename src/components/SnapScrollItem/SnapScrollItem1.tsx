import { useEffect, useRef } from 'react'

import { Init, TextDrawing } from '@/components/TextDrawing/TextDrawing'

export const SnapScrollItem1 = ({ id }: { id: string }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isRender = useRef<boolean>(false)

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Check if this is the first render
          if (!isRender.current) {
            isRender.current = true
            Init(id)
          } else {
            // Re-trigger the animation
            TextDrawing()
          }
        }
      })
    }

    // Setting up the Intersection Observer
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    })

    // Observing the current element
    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [id])

  return <div ref={containerRef} style={{ height: '100%' }} id={id} />
}
