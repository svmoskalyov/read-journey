import { useState } from 'react'
import { Flex, Heading, Image, Card, Text } from '@chakra-ui/react'
import book7 from '@/assets/images/image 7.png'
import unread from '@/assets/icons/block-run.svg'
import read from '@/assets/icons/block-stop.svg'

function MyReading() {
  const [reading, setReading] = useState(false)
  const [stat, setStat] = useState(0)

  return (
    <Flex
      direction="column"
      // justifyContent="space-between"
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
        {stat === 100 && (
          <Text
            fontFamily="Gilroy-Medium"
            fontSize={{ base: '12px', tablet: '14px' }}
            lineHeight={{ base: '16px', tablet: '18px' }}
            letterSpacing="-0.02em"
            color="brand.muted"
          >
            6 hours and 23 minutes left
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
        <Image
          mb={{ base: '8px', tablet: '25px' }}
          h={{ base: '208px', tablet: '256px', desktop: '340px' }}
          w={{ base: '137px', tablet: '169px', desktop: '224px' }}
          src={book7}
          alt="image book"
          rounded="8px"
        />
        <Card.Body gap="4px" p="0">
          <Card.Title
            fontFamily="Gilroy-Bold"
            fontSize={{ base: '14px', tablet: '20px' }}
            lineHeight={{ base: '18px', tablet: '20px' }}
            letterSpacing="-0.02em"
            textAlign="center"
          >
            I See You Are Interested In The Dark
          </Card.Title>
          <Card.Description
            fontFamily="Gilroy-Medium"
            fontSize={{ base: '10px', tablet: '14px' }}
            lineHeight={{ base: '12px', tablet: '18px' }}
            letterSpacing="-0.02em"
            textAlign="center"
          >
            Hilarion Pavlyuk
          </Card.Description>
        </Card.Body>
      </Card.Root>

      {!reading && (
        <Image
          src={read}
          h={{ base: '40px', tablet: '50px' }}
          w={{ base: '40px', tablet: '50px' }}
          alt="image read book"
        />
      )}
      {reading && (
        <Image
          src={unread}
          h={{ base: '40px', tablet: '50px' }}
          w={{ base: '40px', tablet: '50px' }}
          alt="image unread book"
        />
      )}
    </Flex>
  )
}

export default MyReading
