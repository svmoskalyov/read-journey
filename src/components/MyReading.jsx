import { useState } from 'react'
import { Flex, Heading, Image, Card } from '@chakra-ui/react'
import book7 from '@/assets/images/image 7.png'
import unread from '@/assets/icons/block-run.svg'
import read from '@/assets/icons/block-stop.svg'

function MyReading() {
  const [reading, setReading] = useState(false)

  return (
    <Flex
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      p="5"
      w="full"
    >
      <Flex alignItems="flex-start" w="full">
        <Heading
          mb="10"
          fontFamily="Gilroy-Bold"
          fontSize="20px"
          lineHeight="20px"
        >
          My reading
        </Heading>
      </Flex>

      <Card.Root
        alignItems="center"
        maxW="146px"
        bg="brand.bgSecondary"
        color="brand.accent"
        border="none"
        overflow="hidden"
      >
        <Image
          mb="2"
          h="208px"
          w="137px"
          src={book7}
          alt="image book"
          rounded="8px"
        />
        <Card.Body gap="5px" p="0">
          <Card.Title
            fontFamily="Gilroy-Bold"
            fontSize="14px"
            lineHeight="18px"
            letterSpacing="-0.02em"
            textAlign="center"
          >
            I See You Are Interested In The Dark
          </Card.Title>
          <Card.Description
            fontFamily="Gilroy-Medium"
            fontSize="10px"
            lineHeight="12px"
            letterSpacing="-0.02em"
            textAlign="center"
          >
            Hilarion Pavlyuk
          </Card.Description>
        </Card.Body>
      </Card.Root>

      {!reading && <Image src={read} w="10" h="10" alt="image read book" />}
      {reading && <Image src={unread} w="10" h="10" alt="image unread book" />}
    </Flex>
  )
}

export default MyReading
