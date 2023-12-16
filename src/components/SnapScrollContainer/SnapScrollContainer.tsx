import React from 'react'

import styles from './SnapScrollContainer.module.css'

interface ISnapScrollContainerProps {
  items: Array<React.ReactNode>
}

interface ISnapScrollItemProps {
  children: React.ReactNode
}

const SnapScrollItem = ({ children }: ISnapScrollItemProps) => {
  return <div className={styles.item}>{children}</div>
}

export const SnapScrollContainer = ({ items }: ISnapScrollContainerProps) => {
  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <SnapScrollItem key={index}>{item}</SnapScrollItem>
      ))}
    </div>
  )
}
