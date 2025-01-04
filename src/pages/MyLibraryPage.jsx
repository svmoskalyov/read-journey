import { Flex, Grid } from '@chakra-ui/react'
import Dashboard from '@/components/Dashboard'
import MyLibrary from '@/components/MyLibrary'

function MyLibraryPage() {
  return (
    <Grid gap="2.5" bg="brand.bgPrimary" color="brand.accent">
      <Flex direction="column" p="5" bg="brand.bgSecondary" rounded="30px">
        <Dashboard page="library" />
      </Flex>
      <Flex px="5" py="10" maxW='335px' h="382px" bg="brand.bgSecondary" rounded="30px">
        <MyLibrary />
      </Flex>
    </Grid>
  )
}

export default MyLibraryPage
