import { Link, Tabs } from '@chakra-ui/react'

function UserNav() {
  const local = window.location.pathname

  return (
    <Tabs.Root defaultValue={local}>
      <Tabs.List
        display="flex"
        flexDirection="column"
        colorPalette="blue"
        borderBottom="none"
      >
        <Tabs.Trigger value="/recommended" asChild>
          <Link unstyled href="/" color="brand.accent" p="0">
            Home
          </Link>
        </Tabs.Trigger>
        <Tabs.Trigger value="/library" asChild>
          <Link unstyled href="library" color="brand.accent" p="0">
            My library
          </Link>
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  )
}

export default UserNav
