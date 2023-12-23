import { SnapScrollContainer } from '@/components/SnapScrollContainer/SnapScrollContainer'
import { SnapScrollItem1 } from '@/components/SnapScrollItem/SnapScrollItem1'
import { SnapScrollItem2 } from '@/components/SnapScrollItem/SnapScrollItem2'

import styles from './Main.module.css'

export const Main = () => {
  return (
    <main className={styles.main}>
      <SnapScrollContainer
        items={[<SnapScrollItem1 id="item1" />, <SnapScrollItem2 id="item2" text="Signature" />]}
      />
    </main>
  )
}
