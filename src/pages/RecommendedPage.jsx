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
      // borderRadius="30px"
    >
      <Flex
        // direction="column"
        // align="flex-start"
        // justify="center"
        // justifyContent="flex-start"
        p="5"
        h="478px"
        bg="brand.bgSecondary"
        borderRadius="30px"
      >
        sec1
      </Flex>

      <Flex
        // justify="center"
        // align="flex-start"
        p="5"
        h="382px"
        // overflow="hidden"
        bg="brand.bgSecondary"
        borderRadius="30px"
      >
        sec2
      </Flex>
    </Grid>
  )
}

export default RecommendedPage
