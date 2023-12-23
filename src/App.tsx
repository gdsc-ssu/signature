import { Footer } from '@/components/Footer/Footer'
import { HandTrack } from '@/components/HandTrack/HandTrack'
import { Header } from '@/components/Header/Header'
import { SnapScrollContainer } from '@/components/SnapScrollContainer/SnapScrollContainer'
import { SnapScrollItem } from '@/components/SnapScrollItem/SnapScrollItem'

import styles from './App.module.css'

import './style/global.css'

export const App = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <SnapScrollContainer items={[<SnapScrollItem id="item1" text="Signature" />]} />
      </main>
      <div>
        <HandTrack></HandTrack>
      </div>
      <Footer />
    </>
  )
}
