import { Flex, Grid } from '@chakra-ui/react'
import Dashboard from '@/components/Dashboard'
import MyLibrary from '@/components/MyLibrary'

function MyLibraryPage() {
  return (
    <Grid gap="2.5" bg="brand.bgPrimary" color="brand.accent">
      <Flex
        justifyContent='space-between'
        direction={{ base: 'column', tablet: 'row', desktop: 'row' }}
        p={{ base: '20px', tablet: '32px', desktop: '20px' }}
        bg="brand.bgSecondary"
        rounded="30px"
      >
        <Dashboard page="library" />
      </Flex>
      <Flex
        px={{ base: '20px', tablet: '40px', desktop: '20px' }}
        py={{ base: '40px', tablet: '40px', desktop: '20px' }}
        h={{ base: '382px', tablet: '518px', desktop: '20px' }}
        bg="brand.bgSecondary"
        rounded="30px"
        // maxW="335px"
      >
        <MyLibrary />
      </Flex>
    </Grid>
  )
}

export default MyLibraryPage
