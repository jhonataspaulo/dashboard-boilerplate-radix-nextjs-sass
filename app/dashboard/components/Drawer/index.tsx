import React from 'react'

import styles from './styles.module.scss'
import { Box, Button, Flex, Text } from '@radix-ui/themes'
import { MdClose } from 'react-icons/md'
import { useDrawer } from '@/hooks/useDrawer'
import { PAGES } from '@/core/pages'
import { usePathname, useRouter } from 'next/navigation'
import { useMediaQuery } from 'usehooks-ts'

import { purple, gray } from '@radix-ui/colors'

export const Drawer = () => {
  const { setOpen } = useDrawer()
  const router = useRouter()
  const matches = useMediaQuery('(max-width: 768px)')
  const pathName = usePathname()

  const handleNavigation = (path: string) => {
    router.push(path)
    if (matches) {
      setOpen(false)
    }
  }

  return (
    <Box p="4" className={styles.container}>
      <Flex align="center" justify="between">
        <Text size="8" weight="bold" color="purple">
          Drawer
        </Text>
        <Button
          className={styles.button}
          asChild
          variant="ghost"
          color="gray"
          onClick={() => setOpen((op) => !op)}
        >
          <MdClose size={24} />
        </Button>
      </Flex>
      <Flex direction="column" mt="8" gap="4" align="start">
        {PAGES.map((page) => {
          const isActive = page.regex.test(pathName)
          return (
            <Flex
              className={styles.option}
              key={page.path}
              width="100%"
              style={{
                backgroundColor: isActive ? purple.purple5 : '',
                borderRadius: 4,
                cursor: 'pointer',
              }}
            >
              <Flex
                p="3"
                width="100%"
                align="center"
                gap="3"
                onClick={() => handleNavigation(page.path)}
              >
                <page.icon
                  size={24}
                  style={{
                    color: isActive ? purple.purple10 : gray.gray10,
                  }}
                />
                <Text
                  style={{
                    userSelect: 'none',
                    msUserSelect: 'none',
                    WebkitUserSelect: 'none',
                  }}
                  color={isActive ? 'purple' : 'gray'}
                  className={isActive ? purple.purple10 : gray.gray8}
                >
                  {page.title}
                </Text>
              </Flex>
            </Flex>
          )
        })}
      </Flex>
    </Box>
  )
}
