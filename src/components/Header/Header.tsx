import { FaGithub } from 'react-icons/fa'

import { IconWrapper } from '../IconWrapper/IconWrapper'

import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <span>signature</span>
      </div>

      <IconWrapper>
        <a href="https://github.com/gdsc-ssu/signature" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </IconWrapper>
    </header>
  )
}
