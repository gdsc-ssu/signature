import { useRef } from 'react'

import { FaGithub } from 'react-icons/fa'

import { IconWrapper } from '../IconWrapper/IconWrapper'

import styles from './Header.module.css'

export const Header = () => {
  const maskRef = useRef<HTMLDivElement>(null)

  const onLinkClick = () => {
    if (!maskRef.current) return

    const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1
    const stageWidth = document.body.clientWidth * pixelRatio
    const stageHeight = window.innerHeight * pixelRatio
    const maxRadius = Math.sqrt(stageWidth * stageWidth + stageHeight * stageHeight)

    maskRef.current.style.transition = 'transform 1.2s cubic-bezier(0.83, 0, 0.17, 1)'

    requestAnimationFrame(() => {
      maskRef.current!.style.transform = `translate3d(-50%, -50%, 0) scale(${maxRadius})`
    })

    maskRef.current.ontransitionend = () => {
      maskRef.current!.ontransitionend = null

      setTimeout(() => {
        window.open('https://github.com/gdsc-ssu/signature', '_blank')
      }, 100)

      setTimeout(() => {
        maskRef.current!.style.transition = ''
        maskRef.current!.style.transform = ''
      }, 1000)
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span>signature</span>
      </div>

      <div className={styles.github} onClick={onLinkClick}>
        <div ref={maskRef} className={styles.mask}></div>
        <IconWrapper className={styles['icon-link']}>
          <FaGithub />
        </IconWrapper>
      </div>
    </header>
  )
}
