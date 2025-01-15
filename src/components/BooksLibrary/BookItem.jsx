import { useState } from 'react'
import { Card, Flex, Heading, IconButton, Image, Text } from '@chakra-ui/react'
import trash from '@/assets/icons/trash.svg'
import DialogBook from '@/components/DialogBook.jsx'

function BookItem({ book }) {
  const [openDialog, setOpenDialog] = useState(false)

  const toogleDialog = () => {
    setOpenDialog(!openDialog)
  }

  return (
    <>
      <Flex>
        <Card.Root
          maxW="137px"
          bg="brand.bgSecondary"
          color="brand.accent"
          border="none"
          overflow="hidden"
        >
          <Flex
            direction="column"
            alignItems="center"
            mb="2"
            p="4"
            h="208px"
            w="137px"
            rounded="8px"
            bg={book.color}
            boxShadow="0px 0px 16px 2px rgba(255,255,255,0.4) inset"
            cursor="pointer"
            onClick={toogleDialog}
          >
            <Text
              mb="12"
              maxW="98%"
              fontFamily="Gilroy-Medium"
              fontSize="10px"
              lineHeight="12px"
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
              fontSize="14px"
              lineHeight="18px"
              letterSpacing="-0.02em"
              overflow="hidden"
              textOverflow="ellipsis"
              textAlign="center"
              userSelect="none"
            >
              {book.title}
            </Heading>
          </Flex>

          <Card.Body
            p="0"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Flex direction="column" minH="32px" w="97px">
              <Card.Title
                fontFamily="Gilroy-Bold"
                fontSize="14px"
                lineHeight="18px"
                letterSpacing="0.02em"
                overflow="hidden"
                textWrap="nowrap"
                textOverflow="ellipsis"
              >
                {book.title}
              </Card.Title>
              <Card.Description
                fontFamily="Gilroy-Medium"
                fontSize="10px"
                lineHeight="12px"
                letterSpacing="0.02em"
                overflow="hidden"
                textWrap="nowrap"
                textOverflow="ellipsis"
              >
                {book.author}
              </Card.Description>
            </Flex>
            <Flex alignItems="flex-end">
              <IconButton
                minW="28px"
                h="28px"
                aria-label="button delete"
                bg="#E850501d"
                border="1px solid #E850502d"
                rounded="full"
                onClick={() => console.log('book delete')}
              >
                <Image src={trash} alt="delete book" />
              </IconButton>
            </Flex>
          </Card.Body>
        </Card.Root>
      </Flex>

      {openDialog &&
        <DialogBook statBook={false} onClose={toogleDialog} book={book} />
      }
    </>
  )
}

export default BookItem
