import Dashboard from '@/components/Dashboard'
import RecommendedBooks from '@/components/RecommendedBooks'
import { Flex, Grid } from '@chakra-ui/react'

function RecommendedPage() {
  return (
    // <div>RecommendedPage</div>

    <Grid
      // templateRows="repeat(2, 1fr)"
      gap="2.5"
      // p="5"
      bg="brand.bgPrimary"
      color="brand.accent"
      // rounded="30px"
    >
      <Flex
        direction="column"
        // gap="2.5"
        // align="flex-start"
        // justify="center"
        // justifyContent="flex-start"
        p="5"
        h="478px"
        bg="brand.bgSecondary"
        rounded="30px"
      >
        <Dashboard />
      </Flex>

      <Flex
        // justify="center"
        // align="flex-start"
        p="5"
        h="382px"
        // overflow="hidden"
        bg="brand.bgSecondary"
        rounded="30px"
      >
        <RecommendedBooks />
      </Flex>
    </Grid>
  )
}

export default RecommendedPage
