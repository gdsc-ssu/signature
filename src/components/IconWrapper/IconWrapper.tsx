import styles from './IconWrapper.module.css'

interface IIconWrapperProps {
  children: React.ReactNode
  className?: string
}

export const IconWrapper = ({ children, className = '' }: IIconWrapperProps) => {
  return <div className={`${styles.wrapper} ${className}`}>{children}</div>
}
