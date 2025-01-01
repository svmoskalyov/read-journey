import { Box, Flex } from '@chakra-ui/react'

function Header() {
  return (
    <Flex
      gridArea="header"
      alignItems="center"
      justifyContent="space-between"
      px="5"
      bg="brand.bgSecondary"
      color="brand.accent"
      borderRadius="15px"
    >
      <Box>1</Box>
      <Box>2</Box>
    </Flex>
  )
}

export default Header
