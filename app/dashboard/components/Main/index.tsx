'use client'
import React, { FC, ReactNode } from 'react'

import styles from './styles.module.scss'
import { Drawer } from '../Drawer'
import { AppBar } from '../AppBar'
import { Content } from '../Content'
import { useDrawer } from '@/hooks/useDrawer'

type Props = {
  children: ReactNode
}

export const Main: FC<Props> = ({ children }) => {
  const { open } = useDrawer()
  return (
    <main className={`${styles.app} ${!open && styles.closed}`}>
      <section className={styles.drawer}>
        <Drawer />
      </section>
      <section className={styles.section}>
        <div className={styles.appbar}>
          <AppBar />
        </div>
        <div className={styles.content}>
          <Content>{children}</Content>
        </div>
      </section>
    </main>
  )
}
