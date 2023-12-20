import styles from './App.module.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { SnapScrollContainer } from './components/SnapScrollContainer/SnapScrollContainer'

export const App = () => {
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
