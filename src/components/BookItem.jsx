import { Card, Flex, Heading, Text } from '@chakra-ui/react'
import DialogBook from '@/components/DialogBook.jsx'
import { useState } from 'react'

function BookItem({ book }) {
  const [openDialog, setOpenDialog] = useState(false)

  const toogleDialog = () => {
    setOpenDialog(!openDialog)
  }

  return (
    <>
      <Card.Root
        maxW="248px"
        bg="brand.bgSecondary"
        color="brand.accent"
        border="none"
        overflow="hidden"
        key={book.id}
      >
        <Flex
          direction="column"
          alignItems="center"
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
            letterSpacing="0.02em"
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
        <Card.Body p="0" pt="2">
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
        </Card.Body>
      </Card.Root>

      {openDialog &&
        <DialogBook statBook={true} onClose={toogleDialog} book={book} />}
    </>
  )
}

export default BookItem