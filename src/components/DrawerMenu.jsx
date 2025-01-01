import { useState } from 'react'
import { IconButton, Image } from '@chakra-ui/react'
import { Button } from '@/components/ui/button'
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerRoot,
  DrawerTrigger
} from '@/components/ui/drawer'
import menu from '@/assets/icons/menu.svg'
import UserNav from './UserNav'

function DrawerMenu() {
  const [open, setOpen] = useState(false)

  return (
    <DrawerRoot open={open} onOpenChange={e => setOpen(e.open)}>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <IconButton variant="ghost" aria-label="menu">
          <Image src={menu} alt="menu" h="28px" w="28px" />
        </IconButton>
      </DrawerTrigger>
      <DrawerContent w="200px" bg="brand.bgInput" color="brand.accent">
        <DrawerBody display="flex" justifyContent="center" alignItems="center">
          <UserNav />
        </DrawerBody>
        <DrawerFooter justifyContent="center">
          <DrawerActionTrigger asChild>
            <Button
              variant="outline"
              h="38px"
              w="91px"
              fontFamily="Gilroy-Bold"
              color="brand.accent"
              border="1px solid #f9f9f94d"
              rounded="30px"
            >
              Log out
            </Button>
          </DrawerActionTrigger>
        </DrawerFooter>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  )
}

export default DrawerMenu
