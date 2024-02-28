'use client'
import React from 'react'

import styles from './styles.module.scss'
import { Button, Flex, Text } from '@radix-ui/themes'
import { RiMenuLine } from 'react-icons/ri'
import { useDrawer } from '@/hooks/useDrawer'

export const AppBar = () => {
  const { setOpen } = useDrawer()
  return (
    <Flex
      align="center"
      justify="between"
      width="100%"
      px="4"
      className={styles.container}
    >
      <Button
        asChild
        variant="ghost"
        color="gray"
        onClick={() => setOpen((op) => !op)}
      >
        <RiMenuLine size={28} />
      </Button>
      <Text>Jhonatas</Text>
    </Flex>
  )
}
