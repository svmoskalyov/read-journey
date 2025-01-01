import { Link, Tabs } from '@chakra-ui/react'

function UserNav() {
  return (
    <Tabs.Root defaultValue="home">
      <Tabs.List
        display="flex"
        flexDirection="column"
        colorPalette="blue"
        borderBottom="none"
      >
        <Tabs.Trigger value="home" asChild>
          <Link unstyled href="#" color="brand.accent" p="0">
            Home
          </Link>
        </Tabs.Trigger>
        <Tabs.Trigger value="library" asChild>
          <Link unstyled href="#" color="brand.accent" p="0">
            My library
          </Link>
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  )
}

export default UserNav
