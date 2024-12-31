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

function AuthLayout() {
  return (
    <Grid
      templateRows="repeat(2, 1fr)"
      gap="2.5"
      p="5"
      bg="brand.bgPrimary"
      color="brand.accent"
    >
      <Flex
        direction="column"
        justify="center"
        justifyContent="flex-start"
        p="5"
        h="411px"
        bg="brand.bgSecondary"
        borderRadius="30px"
      >
        <Box>
          <Link
            variant="underline"
            fontFamily="Gilroy-Medium"
            fontSize="12px"
            color="brand.muted"
            href="/"
          >
            <Image src={logo} alt="logo" mb="10" />
          </Link>
          <Heading
            as={'h1'}
            pb="5"
            fontFamily="Gilroy-Bold"
            fontSize="2rem"
            letterSpacing="wide"
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
      >
        <Image src={imgPhone} alt="image phone" maxW="225px" />
      </Flex>
    </Grid>
  )
}

export default AuthLayout
