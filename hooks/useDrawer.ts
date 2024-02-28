import { useContext } from 'react'
import { DrawerContext } from '@/contexts/DrawerContext'

export function useDrawer() {
  const drawer = useContext(DrawerContext)
  return drawer
}
