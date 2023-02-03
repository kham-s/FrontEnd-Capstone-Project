import { useState } from 'react'
import {
  Flex,
  Button,
  IconButton,
  Box,
  HStack,
  VStack
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import {Link } from 'react-router-dom'

export const Nav = () => {
  const [display, changeDisplay] = useState('none')
  return (
    <Box alignItems="end">
      <Flex>
        {/* Desktop */}
        <Flex
          display={['none', 'none', 'flex','flex']}
        >
          <nav>
            <HStack>
              <Box px={2}><Link to="/">Home</Link></Box>
              <Box px={2}><Link to="/about">About</Link></Box>
              <Box px={2}><Link to="/menu">Menu</Link></Box>
              <Box px={2}><Link to="/booking">Reservations</Link></Box>
              <Box px={2}><Link to="/order">Order Online</Link></Box>
              <Box px={2}><a href="/login">Login</a></Box>
            </HStack>
          </nav>
        </Flex>

        {/* Mobile */}
        <IconButton
          className='hamburger'
          aria-label="Open Menu"
          size="lg"
          margin={0}
          icon={
            <HamburgerIcon />
          }
          onClick={() => changeDisplay('flex')}
          display={['flex', 'flex', 'none', 'none']}
        />
      </Flex>

      {/* Mobile Content */}
      <Flex
        w='100vw'
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={
              <CloseIcon />
            }
            onClick={() => changeDisplay('none')}
          />
        </Flex>

        <Flex
          flexDir="column"
          align="center"
        >
          <nav>
            <VStack>
              <Box px={2}><Link to="/">Home</Link></Box>
              <Box px={2}><Link to="/about">About</Link></Box>
              <Box px={2}><Link to="/menu">Menu</Link></Box>
              <Box px={2}><Link to="/booking">Reservations</Link></Box>
              <Box px={2}><Link to="/order">Order Online</Link></Box>
              <Box px={2}><a href="/login">Login</a></Box>
            </VStack>
          </nav>
        </Flex>
      </Flex>
    </Box>
  )
}
export default Nav;