import styles from './Cursor.module.css'

interface CursorProps {
  x: number
  y: number
}

export const Cursor = ({ x, y }: CursorProps) => {
  return (
    <div
      className={styles.cursor}
      style={{ transform: `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), 0)` }}
    ></div>
  )
}
