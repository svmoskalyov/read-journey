import DashboardStat from '@/components/DashboardStat'
import MyReading from '@/components/MyReading'
import { Flex, Grid } from '@chakra-ui/react'

function ReadingPage() {
  return (
    <Grid gap="2.5" bg="brand.bgPrimary" color="brand.accent">
      <Flex
        justifyContent="space-between"
        direction={{ base: 'column', tablet: 'row', desktop: 'row' }}
        pl={{ base: '20px', tablet: '32px', desktop: '20px' }}
        pt={{ base: '20px', tablet: '32px', desktop: '20px' }}
        pr={{ base: '20px', tablet: '16px', desktop: '20px' }}
        pb={{ base: '20px', tablet: '16px', desktop: '20px' }}
        // direction="column"
        // maxW="335px"
        // h="390px"

        h={{ base: '390px', tablet: '336px', desktop: '20px' }}
        // p="5"
        bg="brand.bgSecondary"
        rounded="30px"
      >
        <DashboardStat />
      </Flex>
      <Flex
        // p="5"
        // px="5"
        // py="10"
        // maxW="335px"
        // h="471px"
        bg="brand.bgSecondary"
        rounded="30px"
        px={{ base: '20px', tablet: '40px', desktop: '20px' }}
        py={{ base: '40px', tablet: '40px', desktop: '20px' }}
        pb={{ base: '20px', tablet: '25px', desktop: '20px' }}
        h={{ base: '382px', tablet: '518px', desktop: '20px' }}
      >
        <MyReading />
      </Flex>
    </Grid>
  )
}

export default ReadingPage
