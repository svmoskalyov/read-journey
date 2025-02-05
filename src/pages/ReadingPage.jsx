import { Flex, Grid } from '@chakra-ui/react'
import Dashboard from '@/components/BooksReading/Dashboard'
import MyReading from '@/components/BooksReading/MyReading'

function ReadingPage() {
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
        pl={{ base: '20px', tablet: '32px', desktop: '20px' }}
        pt={{ base: '20px', tablet: '32px', desktop: '40px' }}
        pr={{ base: '20px', tablet: '16px', desktop: '20px' }}
        pb={{ base: '20px', tablet: '16px', desktop: '20px' }}
        h={{ base: '450px', tablet: '336px', desktop: '651px' }}
        bg="brand.bgSecondary"
        rounded="30px"
      >
        <Dashboard />
      </Flex>
      <Flex
        px={{ base: '20px', tablet: '40px', desktop: '20px' }}
        py={{ base: '40px', tablet: '40px', desktop: '20px' }}
        pb={{ base: '20px', tablet: '25px', desktop: '20px' }}
        h={{ base: '471px', tablet: '518px', desktop: '651px' }}
        bg="brand.bgSecondary"
        rounded="30px"
      >
        <MyReading />
      </Flex>
    </Grid>
  )
}

export default ReadingPage
