import { FaGithub } from 'react-icons/fa'

import { IconWrapper } from '../IconWrapper/IconWrapper'

import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span>signature</span>
      </div>

      <IconWrapper>
        <a
          className={styles['icon-link']}
          href="https://github.com/gdsc-ssu/signature"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </IconWrapper>
    </header>
  )
}
