import { IconWrapper } from '../IconWrapper/IconWrapper'

import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <span>signature</span>
      </div>

      <IconWrapper>github</IconWrapper>
    </header>
  )
}
