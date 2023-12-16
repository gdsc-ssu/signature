import styles from './Footer.module.css'

interface INameLinkProps {
  href: string
  children: React.ReactNode
}

const NameLink = ({ href, children }: INameLinkProps) => {
  return (
    <a className={styles['name-link']} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

const Dot = () => {
  return <div className={styles.dot}></div>
}

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.madeby}>
        <span>Made by</span>
        <NameLink href="https://github.com/itjustbong">itjustbong</NameLink>
        <Dot />
        <NameLink href="https://github.com/Hanna922">Hanna922</NameLink>
        <Dot />
        <NameLink href="https://github.com/fecapark">fecapark</NameLink>
      </div>
    </footer>
  )
}
