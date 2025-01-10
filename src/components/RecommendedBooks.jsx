import { Flex, Heading, Card, Image, Link, Text } from '@chakra-ui/react'
import book4 from '@/assets/images/image 4.png'
import book5 from '@/assets/images/image 5.png'
import book6 from '@/assets/images/image 6.png'
import arrow from '@/assets/icons/arrow-right.svg'

function RecommendedBooks() {
  return (
    <>
      <Flex
        direction="column"
        gap={{ base: '14px', tablet: '14px', desktop: '20px' }}
        p="5"
        h={{ base: '244px', tablet: '272px', desktop: '259px' }}
        w={{ base: '295px', tablet: '313px', desktop: '313px' }}
        bg="brand.bgInput"
        rounded="12px"
      >
        <Heading fontFamily="Gilroy-Bold" fontSize="20px" lineHeight="20px">
          Recommended books
        </Heading>
        <Flex justifyContent="space-between">
          <Card.Root
            maxW="71px"
            color="brand.accent"
            border="none"
            overflow="hidden"
            bg="brand.bgInput"
          >
            {/* <Image h="107px" src={book4} alt="image book" rounded="8px" /> */}

            <Flex
              direction="column"
              alignItems="center"
              p="2"
              h="107px"
              rounded="8px"
              bg="navy"
              // bg={cover}
              boxShadow="0px 0px 16px 2px rgba(255,255,255,0.4) inset"
            >
              <Text
                maxW="98%"
                mb="3"
                fontFamily="Gilroy-Medium"
                fontSize="8px"
                lineHeight="10px"
                letterSpacing="-0.02em"
                overflow="hidden"
                textWrap="nowrap"
                textOverflow="ellipsis"
                userSelect="none"
              >
                Serhiy Zhadan
              </Text>
              <Heading
                maxH="50%"
                fontFamily="Gilroy-Medium"
                fontSize="8px"
                lineHeight="10px"
                letterSpacing="-0.02em"
                overflow="hidden"
                textOverflow="ellipsis"
                textAlign="center"
                userSelect="none"
              >
                The Orphanage
              </Heading>
            </Flex>

            <Card.Body p="0" pt="1">
              <Card.Title
                fontFamily="Gilroy-Bold"
                fontSize="10px"
                lineHeight="12px"
                letterSpacing="0.02em"
                overflow="hidden"
                textWrap="nowrap"
                textOverflow="ellipsis"
              >
                The Orphanage
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
                Serhiy Zhadan
              </Card.Description>
            </Card.Body>
          </Card.Root>

          <Card.Root
            maxW="71px"
            bg="brand.bgInput"
            color="brand.accent"
            border="none"
            overflow="hidden"
          >
            <Image h="107px" src={book5} alt="image book" rounded="8px" />
            <Card.Body p="0" pt="1">
              <Card.Title
                fontFamily="Gilroy-Bold"
                fontSize="10px"
                lineHeight="12px"
                letterSpacing="0.02em"
                overflow="hidden"
                textWrap="nowrap"
                textOverflow="ellipsis"
              >
                Melodіja kavi u tonalnostі kardamonu
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
                Natalia Gurnytska
              </Card.Description>
            </Card.Body>
          </Card.Root>

          <Card.Root
            maxW="71px"
            bg="brand.bgInput"
            color="brand.accent"
            border="none"
            overflow="hidden"
          >
            <Image h="107px" src={book6} alt="image book" rounded="8px" />
            <Card.Body p="0" pt="1">
              <Card.Title
                fontFamily="Gilroy-Bold"
                fontSize="10px"
                lineHeight="12px"
                letterSpacing="0.02em"
                overflow="hidden"
                textWrap="nowrap"
                textOverflow="ellipsis"
              >
                SIx doors
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
                Irene Rozdobudko
              </Card.Description>
            </Card.Body>
          </Card.Root>
        </Flex>

        <Flex justifyContent="space-between">
          <Link
            href="/"
            variant="underline"
            color="brand.muted"
            fontFamily="Gilroy-Medium"
            fontSize="14px"
            lineHeight="18px"
          >
            Home
          </Link>
          <Link
            href="/"
            variant="plain"
            h="24px"
            minW="24px"
            aria-label="link to home"
          >
            <Image src={arrow} alt="arrow" h="24px" w="24px" />
          </Link>
        </Flex>
      </Flex>
    </>
  )
}

export default RecommendedBooks
