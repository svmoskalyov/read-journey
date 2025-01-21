import { useState } from 'react'
import { Card, Flex, Heading, Text } from '@chakra-ui/react'
import { Button } from '@/components/ui/button'
import {
  DialogBody, DialogCloseTrigger, DialogContent, DialogRoot
} from '@/components/ui/dialog'
import { useLibraryStore, useReadingStore, useRecommendedStore } from '@/stores/booksStore.js'
import { useNavigate } from 'react-router'

function DialogBook({ statBook, book }) {
  const navigate = useNavigate()
  const [open, setOpen] = useState(true)
  const addBook = useLibraryStore(state => state.addBook)
  const changeStatus = useRecommendedStore(state => state.changeStatus)
  const setBook = useReadingStore(state => state.setBook)

  const toogle = e => {
    setOpen(e.open)
  }

  const handleClick = () => {
    if (statBook) {
      addBook(book)
      changeStatus(book.id)
    }
    if (!statBook) {
      setBook(book)
      navigate('/reading')
    }
  }

  return (
    <>
      <DialogRoot lazyMount placement="center" open={open} onOpenChange={toogle}>
        <DialogContent
          p={{ base: '40px', tablet: '50px' }}
          h={{ base: '421px', tablet: '483px' }}
          w={{ base: '335px', tablet: '500px' }}
          bg="brand.bgSecondary"
          color="brand.accent"
          rounded="12px"
        >
          <DialogBody display="flex" justifyContent="center">
            <Card.Root
              alignItems="center"
              maxW="248px"
              bg="brand.bgSecondary"
              color="brand.accent"
              border="none"
              overflow="hidden"
            >
              <Flex
                direction="column"
                justifyContent="space-between"
                alignItems="center"
                mb="16px"
                p="4"
                h={{ base: '208px', tablet: '233px' }}
                w={{ base: '137px', tablet: '153px' }}
                rounded="8px"
                bg={book.color}
                boxShadow="0px 0px 16px 2px rgba(255,255,255,0.4) inset"
                cursor="pointer"
              >
                <Text
                  maxW="98%"
                  fontFamily="Gilroy-Medium"
                  fontSize={{ base: '12px', tablet: '14px' }}
                  lineHeight={{ base: '14px', tablet: '18px' }}
                  letterSpacing="-0.02em"
                  overflow="hidden"
                  textWrap="nowrap"
                  textOverflow="ellipsis"
                  userSelect="none"
                >
                  {book.author}
                </Text>
                <Heading
                  maxH="50%"
                  fontFamily="Gilroy-Bold"
                  fontSize={{ base: '18px', tablet: '20px' }}
                  lineHeight={{ base: '20px', tablet: '22px' }}
                  letterSpacing="-0.02em"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  textAlign="center"
                  userSelect="none"
                >
                  {book.title}
                </Heading>
                <Text
                  maxW="98%"
                  fontFamily="Gilroy-Medium"
                  fontSize={{ base: '12px', tablet: '10px' }}
                  lineHeight={{ base: '14px', tablet: '12px' }}
                  letterSpacing="0.2em"
                  overflow="hidden"
                  textWrap="nowrap"
                  textOverflow="ellipsis"
                  userSelect="none"
                >
                  {book.totalPages}
                </Text>
              </Flex>

              <Card.Body alignItems="center" gap="1" p="0" pb="5">
                <Card.Title
                  fontFamily="Gilroy-Bold"
                  fontSize={{ base: '18px', tablet: '20px' }}
                  lineHeight={{ base: '20px', tablet: '24px' }}
                  letterSpacing="0.02em"
                  overflow="hidden"
                  textWrap="nowrap"
                  textOverflow="ellipsis"
                >
                  {book.title}
                </Card.Title>
                <Card.Description
                  fontFamily="Gilroy-Medium"
                  fontSize={{ base: '12px', tablet: '14px' }}
                  lineHeight={{ base: '14px', tablet: '18px' }}
                  letterSpacing="0.02em"
                  overflow="hidden"
                  textWrap="nowrap"
                  textOverflow="ellipsis"
                >
                  {book.author}
                </Card.Description>
                <Text
                  fontFamily="Gilroy-Medium"
                  fontSize={{ base: '12px', tablet: '10px' }}
                  lineHeight={{ base: '14px', tablet: '12px' }}
                  letterSpacing="0.2em"
                >
                  {book.totalPages}
                </Text>
              </Card.Body>
              <Card.Footer p="0">
                <Button
                  variant="outline"
                  h={{ base: '42px', tablet: '46px' }}
                  w={{ base: '141px', tablet: '162px' }}
                  fontFamily="Gilroy-Bold"
                  fontSize={{ base: '14px', tablet: '16px' }}
                  lineHeight={{ base: '14px', tablet: '18px' }}
                  color="brand.accent"
                  border="1px solid #f9f9f94d"
                  rounded="30px"
                  onClick={handleClick}
                  _hover={{
                    bg: 'none',
                    color: 'none'
                  }}
                >
                  {statBook ? 'Add to library' : 'Start reading'}
                </Button>
              </Card.Footer>
            </Card.Root>
          </DialogBody>
          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>
    </>
  )
}

export default DialogBook
