import { Button } from '@radix-ui/themes'
import NextLink from 'next/link'

import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <Button asChild size="3">
        <NextLink href="/dashboard">Ir para dashboard</NextLink>
      </Button>
    </main>
  )
}
