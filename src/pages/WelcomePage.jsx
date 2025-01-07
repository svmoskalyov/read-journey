import { Box, Link, Text } from '@chakra-ui/react'

function WelcomePage() {
  return (
    <Box>
      <Text
        mb={{ base: '16px', tablet: '32px', desktop: '20px' }}
        fontSize={{ base: '16px', tablet: '20px', desktop: '20px' }}
      >
        Welcome to the app. You are welcome for choosing this app.
      </Text>
      <Link
        px={{ base: '36px', tablet: '54px', desktop: '20px' }}
        py={{ base: '12px', tablet: '16px', desktop: '20px' }}
        fontFamily="Gilroy-Bold"
        fontSize={{ base: '14px', tablet: '20px', desktop: '20px' }}
        lineHeight={{ base: '14px', tablet: '20px', desktop: '20px' }}
        letterSpacing="0.02em"
        rounded="30px"
        color="brand.bgSecondary"
        bg="brand.accent"
        href="/login"
      >
        get started
      </Link>
    </Box>
  )
}

export default WelcomePage
