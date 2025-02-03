import { Flex, Heading, Image, Card, Text, Mark } from '@chakra-ui/react'
import unread from '@/assets/icons/block-run.svg'
import read from '@/assets/icons/block-stop.svg'
import { useReadingStore } from '@/stores/booksStore.js'
import DialogBookStat from '@/components/DialogBookStat.jsx'

function MyReading() {
  const book = useReadingStore(state => state.book)
  const isReading = useReadingStore(state => state.isReading)

  return (
    <Flex
      direction="column"
      alignItems="center"
      w="full"
    >
      <Flex
        justify="space-between"
        alignItems="center"
        mb={{ base: '40px', tablet: '32px', desktop: '44px' }}
        w="full"
      >
        <Heading
          fontFamily="Gilroy-Bold"
          fontSize={{ base: '20px', tablet: '28px' }}
          lineHeight={{ base: '20px', tablet: '32px' }}
          letterSpacing="-0.02em"
        >
          My reading
        </Heading>
        {book.status === 'done' && (
          <Text
            fontFamily="Gilroy-Medium"
            fontSize={{ base: '12px', tablet: '14px' }}
            lineHeight={{ base: '16px', tablet: '18px' }}
            letterSpacing="-0.02em"
            color="brand.muted"
          >
            1 hour 11 minutes
            {/*{book.timeLeftToRead.days !== 0 &&*/}
            {/*  <><Mark mx="2px">{book.timeLeftToRead.days}</Mark>days</>}*/}
            {/*{book.timeLeftToRead.hours !== 0 &&*/}
            {/*  <><Mark mx="2px">{book.timeLeftToRead.hours}</Mark>hours</>}*/}
            {/*{book.timeLeftToRead.minutes !== 0 &&*/}
            {/*  <><Mark mx="2px">{book.timeLeftToRead.minutes}</Mark>*/}
            {/*    minutes left</>}*/}
          </Text>
        )}
      </Flex>

      <Card.Root
        alignItems="center"
        mb={{ base: '8px', tablet: '16px', desktop: '25px' }}
        maxW={{ base: '146px', tablet: '317px' }}
        bg="brand.bgSecondary"
        color="brand.accent"
        border="none"
        overflow="hidden"
      >
        <Flex
          direction="column"
          alignItems="center"
          p="4"
          mb={{ base: '8px', tablet: '25px' }}
          h={{ base: '208px', tablet: '256px', desktop: '340px' }}
          w={{ base: '137px', tablet: '169px', desktop: '224px' }}
          rounded="8px"
          bg={book.color}
          boxShadow="0px 0px 16px 2px rgba(255,255,255,0.4) inset"
        >
          <Text
            maxW="98%"
            mb="12"
            fontFamily="Gilroy-Medium"
            fontSize={{ base: '12px', tablet: '18px' }}
            lineHeight={{ base: '14px', tablet: '20px' }}
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
            fontFamily="Gilroy-Medium"
            fontSize={{ base: '10px', tablet: '14px' }}
            lineHeight={{ base: '12px', tablet: '18px' }}
            letterSpacing="-0.02em"
            overflow="hidden"
            textOverflow="ellipsis"
            textAlign="center"
            userSelect="none"
          >
            {book.title}
          </Heading>
        </Flex>

        <Card.Body gap="4px" p="0">
          <Card.Title
            fontFamily="Gilroy-Bold"
            fontSize={{ base: '14px', tablet: '20px' }}
            lineHeight={{ base: '18px', tablet: '20px' }}
            letterSpacing="-0.02em"
            textAlign="center"
          >
            {book.title}
          </Card.Title>
          <Card.Description
            fontFamily="Gilroy-Medium"
            fontSize={{ base: '10px', tablet: '14px' }}
            lineHeight={{ base: '12px', tablet: '18px' }}
            letterSpacing="-0.02em"
            textAlign="center"
          >
            {book.author}
          </Card.Description>
        </Card.Body>
      </Card.Root>

      {!isReading && (
        <Image
          src={read}
          h={{ base: '40px', tablet: '50px' }}
          w={{ base: '40px', tablet: '50px' }}
          alt="image read book"
        />
      )}
      {isReading && (
        <Image
          src={unread}
          h={{ base: '40px', tablet: '50px' }}
          w={{ base: '40px', tablet: '50px' }}
          alt="image unread book"
        />
      )}

      {book.status === 'done' && <DialogBookStat />}
    </Flex>
  )
}

export default MyReading
