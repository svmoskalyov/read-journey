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

function DialogBook({ statBook, onClose }) {
  const [open, setOpen] = useState(true)

  const toogle = e => {
    setOpen(e.open)
    onClose()
  }

  return (
    <DialogRoot lazyMount placement="center" open={open} onOpenChange={toogle}>
      <DialogContent
        p={{ base: '40px', tablet: '50px', desktop: '20px' }}
        h={{ base: '421px', tablet: '483px', desktop: '20px' }}
        w={{ base: '335px', tablet: '500px', desktop: '20px' }}
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
              h={{ base: '208px', tablet: '233px', desktop: '20px' }}
              w={{ base: '137px', tablet: '153px', desktop: '20px' }}
              src={book3}
              alt="image book"
              rounded="8px"
            />
            <Card.Body alignItems="center" gap="1" p="0" pb="5">
              <Card.Title
                fontFamily="Gilroy-Bold"
                fontSize={{ base: '18px', tablet: '20px', desktop: '20px' }}
                lineHeight={{ base: '18px', tablet: '20px', desktop: '20px' }}
                letterSpacing="0.02em"
                overflow="hidden"
                textWrap="nowrap"
                textOverflow="ellipsis"
              >
                Troscha
              </Card.Title>
              <Card.Description
                fontFamily="Gilroy-Medium"
                fontSize={{ base: '12px', tablet: '14px', desktop: '20px' }}
                lineHeight={{ base: '14px', tablet: '18px', desktop: '20px' }}
                letterSpacing="0.02em"
                overflow="hidden"
                textWrap="nowrap"
                textOverflow="ellipsis"
              >
                Vasyl Shkliar
              </Card.Description>
              <Text
                fontFamily="Gilroy-Medium"
                fontSize={{ base: '12px', tablet: '10px', desktop: '20px' }}
                lineHeight={{ base: '14px', tablet: '12px', desktop: '20px' }}
                letterSpacing="0.02em"
              >
                416 pages
              </Text>
            </Card.Body>
            <Card.Footer p="0">
              <Button
                variant="outline"
                h={{ base: '42px', tablet: '46px', desktop: '20px' }}
                w={{ base: '141px', tablet: '162px', desktop: '20px' }}
                fontFamily="Gilroy-Bold"
                fontSize={{ base: '14px', tablet: '16px', desktop: '20px' }}
                lineHeight={{ base: '14px', tablet: '18px', desktop: '20px' }}
                color="brand.accent"
                border="1px solid #f9f9f94d"
                rounded="30px"
              >
                {statBook ? 'Add to library' : 'Start reading'}
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
