import { Outlet } from 'react-router'
import {
  Box,
  Flex,
  Grid,
  Heading,
  Highlight,
  Image,
  Link
} from '@chakra-ui/react'
import imgPhone from '@/assets/images/iPhone 15 Black m.png'
import logo from '@/assets/icons/logo-mobile.svg'
import logoTablet from '@/assets/icons/logo-tablet.svg'

function AuthLayout() {
  return (
    <Grid
      templateRows={{
        base: 'repeat(2, 1fr)',
        tablet: 'repeat(1, 1fr)',
        desktop: 'repeat(2, 1fr)'
      }}
      gap="2.5"
      p="5"
      // bg="brand.bgPrimary"
      // color="brand.accent"
    >
      <Flex
        direction="column"
        justify="center"
        justifyContent="flex-start"
        px={{ base: '5', tablet: '16', desktop: '20px' }}
        py={{ base: '5', tablet: '10', desktop: '20px' }}
        h={{ base: '411px', tablet: '960px', desktop: '20px' }}
        bg="brand.bgSecondary"
        borderRadius="30px"
      >
        <Box>
          <Link
            href="/"
            mb={{ base: '40px', tablet: '157px', desktop: '20px' }}
          >
            <Image hideFrom="tablet" src={logo} alt="logo" />
            <Image hideBelow="tablet" src={logoTablet} alt="logo" />
          </Link>
          <Heading
            as="h1"
            mb={{ base: '5', tablet: '10', desktop: '20px' }}
            w={{ base: 'full', tablet: '444px', desktop: '20px' }}
            fontFamily="Gilroy-Bold"
            fontSize={{ base: '32px', tablet: '64px', desktop: '20px' }}
            lineHeight={{ base: '32px', tablet: '60px', desktop: '20px' }}
            letterSpacing="0.02em"
          >
            <Highlight query="a book" styles={{ color: 'brand.bgFilter' }}>
              Expand your mind, reading a book
            </Highlight>
          </Heading>
        </Box>
        <Outlet />
      </Flex>
      <Flex
        justify="center"
        align="flex-start"
        pt="5"
        h="351px"
        overflow="hidden"
        bg="brand.bgSecondary"
        borderRadius="30px"
        hideFrom="tablet"
      >
        <Image src={imgPhone} alt="image phone" maxW="225px" />
      </Flex>
    </Grid>
  )
}

export default AuthLayout
