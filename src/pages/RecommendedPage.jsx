import { Flex, Grid } from '@chakra-ui/react'
import Dashboard from '@/components/Dashboard'
import RecommendedBooks from '@/components/RecommendedBooks'

function RecommendedPage() {
  return (
    <Grid gap="2.5" bg="brand.bgPrimary" color="brand.accent">
      <Flex
        direction="column"
        p="5"
        h="478px"
        bg="brand.bgSecondary"
        rounded="30px"
      >
        <Dashboard />
      </Flex>
      <Flex px="5" py="10" h="382px" bg="brand.bgSecondary" rounded="30px">
        <RecommendedBooks />
      </Flex>
    </Grid>
  )
}

export default RecommendedPage
