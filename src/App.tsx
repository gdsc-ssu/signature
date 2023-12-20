import { useEffect } from 'react'

import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { PixiManager } from '@/components/PixiManager/PixiManager'
import { SnapScrollContainer } from '@/components/SnapScrollContainer/SnapScrollContainer'

import styles from './App.module.css'

export const App = () => {
  useEffect(() => {
    const pixiManager = new PixiManager()
    pixiManager.animate()
  }, [])

  return (
    <>
      <Header />
      <main className={styles.main}>
        <SnapScrollContainer items={[]} />
      </main>
      <Footer />
    </>
  )
}
