import { Outlet } from 'react-router'
import { Grid, GridItem } from '@chakra-ui/react'
import Header from '@/components/Header.jsx'

function MainLayout() {
  return (
    <Grid
      grid={{
        base: `'header' 57px 'main' 1fr / 1fr`,
        tablet: `'header' 74px 'main' 1fr / 1fr`,
        desktop: `'header' 57px 'main' 1fr / 1fr`
      }}
      // grid="'header' 57px 'main' 1fr / 1fr"
      gap="2.5"
      p={{ base: '20px', tablet: '16px', desktop: '20px' }}
      // bg="brand.bgPrimary"
      // color="brand.accent"
      // outline="1px solid red"
    >
      <Header />
      <GridItem
        gridArea="main"
        // h='vh'
        // outline="1px solid gold"
      >
        <Outlet />
      </GridItem>
    </Grid>
  )
}

export default MainLayout
