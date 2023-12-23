import { SnapScrollContainer } from '../SnapScrollContainer/SnapScrollContainer'
import { SnapScrollItem } from '../SnapScrollItem/SnapScrollItem'

import styles from './Main.module.css'

export const Main = () => {
  return (
    <main className={styles.main}>
      <SnapScrollContainer items={[<SnapScrollItem id="item1" text="Signature" />]} />
    </main>
  )
}
