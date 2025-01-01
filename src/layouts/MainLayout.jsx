import { Outlet } from 'react-router'
import { Grid, GridItem } from '@chakra-ui/react'
import Header from '@/components/Header.jsx'

function MainLayout() {
  return (
    <Grid
      grid="'header' 57px 'main' 1fr / 1fr"
      gap="2.5"
      p="5"
      bg="brand.bgPrimary"
      color="brand.accent"
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
