import { useEffect } from 'react'

import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { PixiManager } from '@/components/PixiManager/PixiManager'

export const App = () => {
  useEffect(() => {
    const pixiManager = new PixiManager()
    pixiManager.animate()
  }, [])

  return (
    <>
      <Header />
      <Footer />
    </>
  )
}
