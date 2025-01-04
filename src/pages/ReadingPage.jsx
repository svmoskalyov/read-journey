import DashboardStat from '@/components/DashboardStat'
import MyReading from '@/components/MyReading'
import { Flex, Grid } from '@chakra-ui/react'

function ReadingPage() {
  return (
    <Grid gap="2.5" bg="brand.bgPrimary" color="brand.accent">
      <Flex
        direction="column"
        // justifyContent="space-between"
        maxW="335px"
        h="390px"
        p="5"
        bg="brand.bgSecondary"
        rounded="30px"
      >
        <DashboardStat />
      </Flex>
      <Flex
        p="5"
        // px="5"
        // py="10"
        maxW="335px"
        h="471px"
        bg="brand.bgSecondary"
        rounded="30px"
      >
        <MyReading />
      </Flex>
    </Grid>
  )
}

export default ReadingPage
