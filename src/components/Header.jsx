import { Button, Flex, Image, Link, Text } from '@chakra-ui/react'
import logo from '@/assets/icons/logo-mobile.svg'
import { Avatar } from './ui/avatar'
import DrawerMenu from './DrawerMenu'
import UserNav from './UserNav'
import { useAuthStore } from '@/stores/authStore'

function Header() {
  const name = useAuthStore(state => state.name)
  const signoutUser = useAuthStore(state => state.signoutUser)

  return (
    <Flex
      gridArea="header"
      alignItems="center"
      justifyContent="space-between"
      px={{ base: '20px', tablet: '16px' }}
      bg="brand.bgSecondary"
      color="brand.accent"
      borderRadius="15px"
    >
      <Link href="/">
        <Image src={logo} alt="logo" />
      </Link>
      <Flex alignItems="center" h="full">
        <UserNav />
        <Avatar
          size="md"
          mr={{ base: '8px', tablet: '16px' }}
          ml={{ base: '0', tablet: '94px', desktop: '219px' }}
          fontFamily="Gilroy-Bold"
          color="brand.accent"
          bg="brand.bgSecondary"
          border="1px solid #f9f9f94d"
          name={name}
        />
        <Text
          mr={{ desktop: '16px' }}
          fontFamily="Gilroy-Bold"
          fontSize={{ desktop: '16px' }}
          lineHeight={{ desktop: '18px' }}
          color="brand.accent"
          hideBelow="desktop"
        >
          {name}
        </Text>
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
          onClick={() => signoutUser()}
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
