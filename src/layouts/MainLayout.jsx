import { Suspense } from 'react'
import { Outlet } from 'react-router'
import { Grid, GridItem } from '@chakra-ui/react'
import Header from '@/components/Header.jsx'

function MainLayout() {
  return (
    <Grid grid="'header' 57px 'main' 1fr / 1fr" gap="2">
      <Header />
      <GridItem gridArea="main">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </GridItem>
    </Grid>
  )
}

export default MainLayout