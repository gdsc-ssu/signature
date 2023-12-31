import React from 'react'

import styles from './SnapScrollContainer.module.css'

interface SnapScrollContainerProps {
  items: Array<React.ReactNode>
}

interface SnapScrollItemProps {
  children: React.ReactNode
}

const SnapScrollItem = ({ children }: SnapScrollItemProps) => {
  return <div className={styles.item}>{children}</div>
}

export const SnapScrollContainer = ({ items }: SnapScrollContainerProps) => {
  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <SnapScrollItem key={index}>{item}</SnapScrollItem>
      ))}
    </div>
  )
}
