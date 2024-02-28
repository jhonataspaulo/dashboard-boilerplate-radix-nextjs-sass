import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { DrawerProvider } from '@/contexts/DrawerContext'
import { Main } from './components/Main'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className={inter.className}>
      <DrawerProvider>
        <Main>{children}</Main>
      </DrawerProvider>
    </main>
  )
}
