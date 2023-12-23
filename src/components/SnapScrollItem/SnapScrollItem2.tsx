import { useEffect, useRef } from 'react'

import { PixiManager } from '@/components/PixiManager/PixiManager'

export const SnapScrollItem2 = ({ id, text }: { id: string; text: string }) => {
  const isRender = useRef<boolean>(false)

  useEffect(() => {
    if (isRender.current) return
    isRender.current = true
    const pixiManager = new PixiManager(id, text)
    pixiManager.animate()
  }, [])

  return <div id={id} />
}
