import { Vector2 } from '@/model/vector'

import styles from './Cursor.module.css'

interface CursorProps {
  pos: Vector2
}

export const Cursor = ({ pos }: CursorProps) => {
  return (
    <div
      className={styles.cursor}
      style={{ transform: `translate3d(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px), 0)` }}
    ></div>
  )
}
