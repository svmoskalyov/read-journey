import { useState } from 'react'
import { Heading, Image, Mark, Text } from '@chakra-ui/react'
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogRoot
} from '@/components/ui/dialog'
import like from '@/assets/icons/like.svg'
import books from '@/assets/icons/books.svg'

function DialogBookStat({ statBook, onClose }) {
  const [open, setOpen] = useState(true)

  const toogle = e => {
    setOpen(e.open)
    onClose()
  }

  return (
    <DialogRoot lazyMount placement="center" open={open} onOpenChange={toogle}>
      <DialogContent
        py="60px"
        w="335px"
        h="272px"
        bg="brand.bgSecondary"
        color="brand.accent"
        rounded="12px"
      >
        <DialogBody
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          {statBook ? (
            <Image mb="5" h="50px" w="50px" src={like} alt="image like" />
          ) : (
            <Image mb="5" h="50px" w="50px" src={books} alt="image like" />
          )}
          <Heading
            mb="2.5"
            fontFamily="Gilroy-Bold"
            fontSize="18px"
            lineHeight="18px"
            letterSpacing="0.02em"
          >
            {statBook ? 'Good job' : 'The book is read'}
          </Heading>

          {statBook ? (
            <Text
              fontFamily="Gilroy-Medium"
              fontSize="14px"
              lineHeight="18px"
              letterSpacing="0.02em"
              color="brand.muted"
              textAlign="center"
            >
              Your book is now in{' '}
              <Mark px="1" color="brand.accent">
                the library!
              </Mark>{' '}
              The joy knows no bounds and now you can start your training
            </Text>
          ) : (
            <Text
              fontFamily="Gilroy-Medium"
              fontSize="14px"
              lineHeight="18px"
              letterSpacing="0.02em"
              color="brand.muted"
              textAlign="center"
            >
              It was an
              <Mark px="1" color="brand.accent">
                exciting journey
              </Mark>
              , where each page revealed new horizons, and the characters became
              inseparable friends.
            </Text>
          )}
        </DialogBody>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  )
}
export default DialogBookStat
