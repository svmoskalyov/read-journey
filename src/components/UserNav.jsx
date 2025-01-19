import { Box, Flex, Link } from '@chakra-ui/react'
import { NavLink, useLocation } from 'react-router'

function UserNav() {
  const { pathname } = useLocation()

  return (
    <Flex
      hideBelow="tablet"
      flexDirection={{ base: 'column', tablet: 'row', desktop: 'row' }}
      alignItems="center"
      gap={{ base: '4px', tablet: '32px' }}
      h="full"
    >
      <Link
        unstyled
        as={NavLink}
        to="recommended"
        py="20px"
        fontFamily="Gilroy-Medium"
        fontSize={{ base: '14px', tablet: '16px' }}
        lineHeight={{ base: '18px', tablet: '18px' }}
        letterSpacing="0.02em"
        color="brand.accent"
        css={{
          position: 'relative'
        }}
      >
        {pathname === '/recommended' &&
          <Box
            as="span"
            css={{
              position: 'absolute',
              bottom: '8px',
              left: '0',
              height: '3px',
              width: '100%',
              backgroundColor: 'brand.activeNavLink',
              borderRadius: '8px'
            }}
          />
        }
        Home
      </Link>
      <Link
        unstyled
        as={NavLink}
        to="library"
        py="20px"
        fontFamily="Gilroy-Medium"
        fontSize={{ base: '14px', tablet: '16px' }}
        lineHeight={{ base: '18px', tablet: '18px' }}
        letterSpacing="0.02em"
        color="brand.accent"
        css={{
          position: 'relative'
        }}
      >
        {pathname === '/library' &&
          <Box
            as="span"
            css={{
              position: 'absolute',
              bottom: '8px',
              left: '0',
              height: '3px',
              width: '100%',
              backgroundColor: 'brand.activeNavLink',
              borderRadius: '8px'
            }}
          />
        }
        My library
      </Link>
    </Flex>
  )
}

export default UserNav
