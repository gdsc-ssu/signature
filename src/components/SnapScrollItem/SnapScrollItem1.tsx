import { useEffect, useRef } from 'react'

import { init } from '@/components/TextDrawing/TextDrawing'

export const SnapScrollItem1 = ({ id }: { id: string }) => {
  const isRender = useRef<boolean>(false)

  useEffect(() => {
    if (isRender.current) return
    isRender.current = true
    init(id)
  }, [])

  return <div style={{ height: '100%' }} id={id} />
}
