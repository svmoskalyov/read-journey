import {
  Flex,
  Link,
  Heading,
  Text,
  Mark,
  Center,
  Image
} from '@chakra-ui/react'
import arrow from '@/assets/icons/arrow-right.svg'

function Workout() {
  return (
    <Flex
      direction="column"
      gap="5"
      p="5"
      h="244px"
      w="295px"
      bg="brand.bgInput"
      rounded="12px"
    >
      <Heading fontFamily="Gilroy-Bold" fontSize="18px" lineHeight="18px">
        Start your workout
      </Heading>

      <Flex gap="3">
        <Center
          h="10"
          minW="10"
          fontFamily="Gilroy-Bold"
          fontSize="18px"
          bg="brand.accent"
          color="brand.bgPrimary"
          rounded="50%"
        >
          1
        </Center>
        <Text
          fontFamily="Gilroy-Medium"
          fontSize="14px"
          lineHeight="18px"
          letterSpacing="0.02em"
          color="brand.muted"
        >
          <Mark pr="1" color="brand.accent">
            Create a personal library:
          </Mark>
          add the books you intend to read to it.
        </Text>
      </Flex>

      <Flex gap="3">
        <Center
          h="10"
          minW="10"
          fontFamily="Gilroy-Bold"
          fontSize="18px"
          bg="brand.accent"
          color="brand.bgPrimary"
          rounded="50%"
        >
          2
        </Center>
        <Text
          fontFamily="Gilroy-Medium"
          fontSize="14px"
          lineHeight="18px"
          letterSpacing="0.02em"
          color="brand.muted"
        >
          <Mark pr="1" color="brand.accent">
            Create your first workout:
          </Mark>
          define a goal, choose a period, start training.
        </Text>
      </Flex>

      <Flex justifyContent="space-between">
        <Link
          href="/library"
          variant="underline"
          color="brand.muted"
          fontFamily="Gilroy-Medium"
          fontSize="14px"
          lineHeight="18px"
        >
          My library
        </Link>
        <Link
          href="/library"
          variant="plain"
          h="24px"
          minW="24px"
          aria-label="link to my library"
        >
          <Image src={arrow} alt="arrow" h="24px" w="24px" />
        </Link>
      </Flex>
    </Flex>
  )
}

export default Workout
