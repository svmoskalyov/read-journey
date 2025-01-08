import { Flex, Grid } from '@chakra-ui/react'
import Dashboard from '@/components/Dashboard'
import Recommended from '@/components/Recommended'

function RecommendedPage() {
  return (
    <Grid
      templateColumns={{
        desktopOnly: '353px 1fr',
        wideOnly: '353px 1fr'
      }}
      gap={{ base: '10px', tablet: '16px' }}
      bg="brand.bgPrimary"
      color="brand.accent"
    >
      <Flex
        direction={{ base: 'column', tablet: 'row', desktop: 'column' }}
        justifyContent={{
          base: 'normal',
          tablet: 'space-around',
          desktop: 'normal'
        }}
        p={{ base: '20px', tablet: '32px', desktop: '20px' }}
        pt={{ desktop: '40px' }}
        bg="brand.bgSecondary"
        rounded="30px"
      >
        <Dashboard page="recommended" />
      </Flex>
      <Flex
        px={{ base: '20px', tablet: '40px' }}
        py={{ base: '40px', tablet: '40px' }}
        h={{ base: '382px', tablet: '663px', desktop: '651px' }}
        bg="brand.bgSecondary"
        rounded="30px"
      >
        <Recommended />
      </Flex>
    </Grid>
  )
}

export default RecommendedPage
