import { Button, Flex, Image, Link } from '@chakra-ui/react'
import logo from '@/assets/icons/logo-mobile.svg'
import { Avatar } from './ui/avatar'
import DrawerMenu from './DrawerMenu'
import UserNav from './UserNav'

function Header() {
  return (
    <Flex
      gridArea="header"
      alignItems="center"
      justifyContent="space-between"
      px={{ base: '20px', tablet: '16px', desktop: '20px' }}
      bg="brand.bgSecondary"
      color="brand.accent"
      borderRadius="15px"
    >
      <Link href="/">
        <Image src={logo} alt="logo" />
      </Link>
      <Flex alignItems="center">
        <Flex hideBelow="tablet">
          <UserNav />
        </Flex>

        <Avatar
          size="md"
          mr={{ base: '8px', tablet: '16px', desktop: '20px' }}
          ml={{ base: '0', tablet: '94px', desktop: '20px' }}
          fontFamily="Gilroy-Bold"
          color="brand.accent"
          bg="brand.bgSecondary"
          border="1px solid #f9f9f94d"
          name="avatar"
        />

        <Button
          variant="outline"
          h="38px"
          w="91px"
          fontFamily="Gilroy-Bold"
          color="brand.accent"
          border="1px solid #f9f9f94d"
          rounded="30px"
          arial-label="button logout"
          hideBelow="tablet"
        >
          Log out
        </Button>

        <Flex hideFrom="tablet">
          <DrawerMenu />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Header
