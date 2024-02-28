import React, { FC, ReactNode } from 'react'

import styles from './styles.module.scss'
import { Container } from '@radix-ui/themes'

type Props = {
  children: ReactNode
}

export const Content: FC<Props> = ({ children }) => {
  return (
    <Container p="4" className={styles.container}>
      {children}
    </Container>
  )
}
