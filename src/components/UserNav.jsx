import { Link, Tabs } from '@chakra-ui/react'

function UserNav() {
  const local = window.location.pathname

  return (
    <Tabs.Root defaultValue={local}>
      <Tabs.List
        display="flex"
        gap={{ base: '4px', tablet: '32px' }}
        flexDirection={{ base: 'column', tablet: 'row', desktop: 'row' }}
        colorPalette="blue"
        borderBottom="none"
      >
        <Tabs.Trigger value="/" asChild>
          <Link
            unstyled
            href="/"
            p="0"
            fontFamily="Gilroy-Medium"
            fontSize={{ base: '14px', tablet: '16px' }}
            lineHeight={{ base: '18px', tablet: '18px' }}
            letterSpacing="0.02em"
            color="brand.accent"
          >
            Home
          </Link>
        </Tabs.Trigger>
        <Tabs.Trigger value="/library" asChild>
          <Link
            unstyled
            href="library"
            p="0"
            fontFamily="Gilroy-Medium"
            fontSize={{ base: '14px', tablet: '16px' }}
            lineHeight={{ base: '18px', tablet: '18px' }}
            letterSpacing="0.02em"
            color="brand.accent"
          >
            My library
          </Link>
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  )
}

export default UserNav
