import { Box, Link, Text } from '@chakra-ui/react'

function WelcomePage() {
  return (
    <Box>
      <Text mb="4">
        Welcome to the app. You are welcome for choosing this app.
      </Text>
      <Link
        px="9"
        py="3"
        fontFamily="Gilroy-Bold"
        fontSize="14px"
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
