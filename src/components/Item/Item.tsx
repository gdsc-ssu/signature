import { useEffect, useRef } from 'react'
import { PixiManager } from '../PixiManager/PixiManager'

const Item = ({ id }: { id: string }) => {
  const isRender = useRef<boolean>(false)

  useEffect(() => {
    if (isRender.current) return
    isRender.current = true
    const pixiManager = new PixiManager(id)
    pixiManager.animate()
  }, [])

  return <div id={id}></div>
}

export default Item
