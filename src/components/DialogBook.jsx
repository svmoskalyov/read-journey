import { Button } from '@/components/ui/button'
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogRoot
} from '@/components/ui/dialog'
import { useState } from 'react'
import { Card, Image, Text } from '@chakra-ui/react'
import book3 from '@/assets/images/image 3.png'

function DialogBook({ onClose }) {
  const [open, setOpen] = useState(true)

  const toogle = e => {
    setOpen(e.open)
    onClose()
  }

  return (
    <DialogRoot lazyMount placement="center" open={open} onOpenChange={toogle}>
      <DialogContent
        p="10"
        w="335px"
        h="421px"
        bg="brand.bgSecondary"
        color="brand.accent"
        rounded="12px"
      >
        <DialogBody display="flex" justifyContent="center">
          <Card.Root
            maxW="248px"
            bg="brand.bgSecondary"
            color="brand.accent"
            border="none"
            overflow="hidden"
          >
            <Image
              mb="16px"
              h="208px"
              w="137px"
              src={book3}
              alt="image book"
              rounded="8px"
            />
            <Card.Body alignItems="center" gap="1" p="0" pb="5">
              <Card.Title
                fontFamily="Gilroy-Bold"
                fontSize="18px"
                lineHeight="18px"
                letterSpacing="0.02em"
              >
                Troscha
              </Card.Title>
              <Card.Description
                fontFamily="Gilroy-Medium"
                fontSize="12px"
                lineHeight="14px"
                letterSpacing="0.02em"
              >
                Vasyl Shkliar
              </Card.Description>
              <Text
                fontFamily="Gilroy-Medium"
                fontSize="12px"
                lineHeight="14px"
                letterSpacing="0.02em"
              >
                416 pages
              </Text>
            </Card.Body>
            <Card.Footer p="0">
              <Button
                variant="outline"
                h="42px"
                w="141px"
                fontFamily="Gilroy-Bold"
                color="brand.accent"
                border="1px solid #f9f9f94d"
                rounded="30px"
              >
                Add to library
              </Button>
            </Card.Footer>
          </Card.Root>
        </DialogBody>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  )
}

export default DialogBook
