import { Flex, Image, Link } from '@chakra-ui/react'
import logo from '@/assets/icons/logo-mobile.svg'
import { Avatar } from './ui/avatar'
import DrawerMenu from './DrawerMenu'

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
      <Link href="/">
        <Image src={logo} alt="logo" />
      </Link>
      <Flex alignItems="center" gap="2">
        <Avatar
          size="md"
          fontFamily="Gilroy-Bold"
          color="brand.accent"
          bg="brand.bgSecondary"
          border="1px solid #f9f9f94d"
          name="avatar"
        />
        <DrawerMenu />
      </Flex>
    </Flex>
  )
}

export default Header
