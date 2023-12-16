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
  const makerNames = ['itjustbong', 'Hanna922', 'fecapark']

  const getShuffledMakerNames = () => {
    return makerNames.sort(() => Math.random() - 0.5)
  }

  const getShuffledNameLinks = () => {
    const makerNames = getShuffledMakerNames()
    const lastMakerName = makerNames[makerNames.length - 1]
    const nameLinks = makerNames.slice(0, -1).map((makerName) => {
      return (
        <>
          <NameLink href={`https://github.com/${makerName}`}>{makerName}</NameLink>
          <Dot />
        </>
      )
    })
    nameLinks.push(
      <NameLink href={`https://github.com/${lastMakerName}`}>{lastMakerName}</NameLink>
    )
    return nameLinks
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.madeby}>
        <span>Made by</span>
        {...getShuffledNameLinks()}
      </div>
    </footer>
  )
}
