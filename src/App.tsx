import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { SnapScrollContainer } from '@/components/SnapScrollContainer/SnapScrollContainer'

import styles from './App.module.css'
import Item from './components/Item/Item'

export const App = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <SnapScrollContainer items={[<Item id="item1" />]} />
      </main>
      <Footer />
    </>
  )
}
