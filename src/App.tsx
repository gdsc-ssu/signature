import { Footer } from '@/components/Footer/Footer'
import { HandTrack } from '@/components/HandTrack/HandTrack'
import { Header } from '@/components/Header/Header'
import { Item } from '@/components/Item/Item'
import { SnapScrollContainer } from '@/components/SnapScrollContainer/SnapScrollContainer'

import styles from './App.module.css'

import './style/global.css'

export const App = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <SnapScrollContainer items={[<Item id="item1" text="Signature" />]} />
      </main>
      <div>
        <HandTrack></HandTrack>
      </div>
      <Footer />
    </>
  )
}
