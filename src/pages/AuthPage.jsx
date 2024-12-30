import { Box, Flex, Grid, Heading, Highlight, Image } from '@chakra-ui/react'
import imgPhone from '@/assets/images/iPhone 15 Black m.png'
import logo from '@/assets/icons/logo-mobile.svg'
import RegisterForm from '@/components/RegisterForm.jsx'

function AuthPage() {
  return (
    <Grid templateRows="repeat(2, 1fr)" gap="2.5" p="5" bg="brand.bgPrimary" color="brand.accent">
      <Flex justify="center" p="5" h="411px" bg="brand.bgSecondary" borderRadius="30px">
        <Box>
          <Image src={logo} alt="logo" pb="10" />
          <Heading as={'h1'} pb="5" fontFamily="Gilroy-Bold" fontSize="2rem" letterSpacing="wide">
            <Highlight query="a book" styles={{ color: 'brand.bgFilter' }}>
              Expand your mind, reading a book
            </Highlight>
          </Heading>
          <RegisterForm />
        </Box>
      </Flex>
      <Flex justify="center" align="flex-start" pt="5" h="351px" overflow="hidden" bg="brand.bgSecondary"
            borderRadius="30px">
        <Image src={imgPhone} alt="image phone" maxW="225px" />
      </Flex>
    </Grid>
  )
}

export default AuthPage