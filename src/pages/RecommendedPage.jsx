import { Flex, Grid } from '@chakra-ui/react'
import Dashboard from '@/components/Dashboard'
import Recommended from '@/components/Recommended'

function RecommendedPage() {
  return (
    <Grid gap="2.5" bg="brand.bgPrimary" color="brand.accent">
      <Flex
        direction={{ base: 'column', tablet: 'row', desktop: 'row' }}
        justifyContent="space-between"
        p={{ base: '20px', tablet: '32px', desktop: '20px' }}
        bg="brand.bgSecondary"
        rounded="30px"
      >
        <Dashboard page="recommended" />
      </Flex>
      <Flex
        px={{ base: '20px', tablet: '40px', desktop: '20px' }}
        py={{ base: '40px', tablet: '40px', desktop: '20px' }}
        h={{ base: '382px', tablet: '663px', desktop: '20px' }}
        bg="brand.bgSecondary"
        rounded="30px"
      >
        <Recommended />
      </Flex>
    </Grid>
  )
}

export default RecommendedPage
