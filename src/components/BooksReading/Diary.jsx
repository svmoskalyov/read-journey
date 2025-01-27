import { Box, Center, Flex, Heading, Image, List, Mark, Text } from '@chakra-ui/react'
import trash2 from '@/assets/icons/trash-2.svg'
import blockStat from '@/assets/icons/block.svg'
import { useReadingStore } from '@/stores/booksStore.js'
import { useState } from 'react'

function Diary() {
  const book = useReadingStore(state => state.book)
  const [dateStarted, setDateStarted] = useState('')
  console.log(dateStarted)

  const differenceDates = (start, end) => {
    const total = Date.parse(end) - Date.parse(start)
    return Math.floor(total / (1000 * 60 * 60 * 24))
  }

  const plusDay = (day, count) => {
    const getDay = new Date(day)
    const plusDay = getDay.setDate(getDay.getDate() + count)
    return date(plusDay)
  }

  const date = (start) => {
    return new Date(start).toLocaleDateString('de-DE')
  }

  const procent = (start, end) => {
    return Math.floor(((end - start) / book.totalPages) * 100)
  }

  const time = (start, end) => {
    const dateStart = new Date(start)
    const dateEnd = new Date(end)
    const timeDifferenceMS = dateEnd - dateStart
    return Math.floor(timeDifferenceMS / 60000)
  }

  const pagesHour = (startPage, endPage, startDate, endDate) => {
    const pages = endPage - startPage
    const timeDifferenceMins = time(startDate, endDate)
    return Math.floor((pages * 60) / timeDifferenceMins)
  }

  const filteredBooks = (arr) => {
    console.log(arr)
    const newBooks = []
    const diffDays = differenceDates(book.progress[0].startReading,
      book.progress[arr.length - 1].startReading)

    for (let i = 0; i <= diffDays; i++) {
      const day = plusDay(book.progress[0].startReading, i)
      const bf = book.progress.filter(el => date(el.startReading) === day)
      newBooks.push({ date: day, items: bf })
    }
    
    return newBooks
  }
  console.log(filteredBooks(book.progress))

  //   //
  //   // item.startPage
  //   // item.finishPage
  //   // item.startReading
  //   // item.finishReading
  //   //
  //   // {
  //   //  date,
  //   //  items: [
  //   //    {
  //   //    procent,
  //   //    time,
  //   //    pages,
  //   //    pageHour
  //   //    }
  //   //  ]
  //   // }

  return (
    <Flex
      p={{ base: '16px', tablet: '20px', desktop: '20px' }}
      pb="0"
      pl="23px"
      h={{ base: '211px', tablet: '252px', desktop: '373px' }}
      w={{ base: '295px', tablet: '321px', desktop: '313px' }}
      rounded="12px"
      bg="brand.bgInput"
    >
      <List.Root
        variant="plain"
        w="full"
        h="full"
        overflowY="auto"
        scrollbar="hidden"
      >
        {/* {items.map((item, index) => (
            <List.Item key={index}>
              {item}
            </List.Item>
          ))} */}

        {book.progress?.map((item, id) => {
          // if (dateStarted !== item.startReading) {
          //   setDateStarted(item.startReading)
          // }
          console.log(date(item.startReading))

          return (
            <List.Item
              key={id}
              position="relative"
              justifyContent="space-between"
              ml="2"
              pl="4"
              color="brand.muted"
              borderLeft="3px solid"
              borderColor="brand.bgSecondary"
              // _hover={{
              //   '&>div:first-child, & h2': {
              //     borderColor: 'brand.accent',
              //     color: 'brand.accent'
              //   }
              // }}
            >

              <Center
                position="absolute"
                top="0"
                left="-9.5px"
                h="16px"
                w="16px"
                bg="brand.muted"
                borderRadius="4px"
              >
                <Box h="8px" w="8px" bg="brand.bgPrimary" borderRadius="2px"></Box>
              </Center>

              <Flex direction="column">

                <Heading
                  mb="3.5"
                  fontFamily="Gilroy-Bold"
                  fontSize="12px"
                  lineHeight="16px"
                  letterSpacing="0.02em"
                >
                  {date(item.startReading)}
                </Heading>

                <Heading
                  as="h3"
                  mb="1"
                  fontFamily="Gilroy-Medium"
                  fontSize="14px"
                  lineHeight="18px"
                  letterSpacing="0.02em"
                  color="brand.accent"
                >
                  {procent(item.startPage, item.finishPage)}%
                </Heading>
                <Text
                  mb="32px"
                  fontFamily="Gilroy-Medium"
                  fontSize="10px"
                  lineHeight="12px"
                  letterSpacing="0.02em"
                >
                  {time(item.startReading, item.finishReading)}
                  <Mark ml="2px">minutes</Mark>
                </Text>
              </Flex>

              <Flex align="center" gap="2">
                <Flex direction="column" align="center"
                      w="50px"
                >
                  <Heading
                    as="h3"
                    mb="3.5"
                    fontFamily="Gilroy-Medium"
                    fontSize="12px"
                    lineHeight="16px"
                  >
                    {Math.floor(item.finishPage - item.startPage)}
                    <Mark ml="2px">pages</Mark>
                  </Heading>

                  <Box mb="7px">
                    <Image src={blockStat} />
                  </Box>

                  <Text
                    w="100%"
                    fontFamily="Gilroy-Medium"
                    fontSize="10px"
                    lineHeight="12px"
                    textAlign="center"
                  >
                    {pagesHour(item.startPage, item.finishPage,
                      item.startReading, item.finishReading)}
                    <Mark ml="2px" textWrap="wrap">pages per huor</Mark>
                  </Text>
                </Flex>

                <Image
                  h="3.5"
                  w="3.5"
                  src={trash2}
                  alt="delete day"
                  cursor="pointer"
                  onClick={() => console.log('delete item')}
                />
              </Flex>
            </List.Item>
          )
        })}

        {/*<List.Item*/}
        {/*  position="relative"*/}
        {/*  justifyContent="space-between"*/}
        {/*  ml="2"*/}
        {/*  pl="4"*/}
        {/*  color="brand.muted"*/}
        {/*  borderLeft="3px solid"*/}
        {/*  borderColor="brand.bgSecondary"*/}
        {/*  // _hover={{*/}
        {/*  //   '&>div:first-child, & h2': {*/}
        {/*  //     borderColor: 'brand.accent',*/}
        {/*  //     color: 'brand.accent'*/}
        {/*  //   }*/}
        {/*  // }}*/}
        {/*>*/}
        {/*  <Center*/}
        {/*    position="absolute"*/}
        {/*    top="0"*/}
        {/*    left="-9.5px"*/}
        {/*    h="16px"*/}
        {/*    w="16px"*/}
        {/*    bg="brand.muted"*/}
        {/*    borderRadius="4px"*/}
        {/*  >*/}
        {/*    <Box h="8px" w="8px" bg="brand.bgPrimary" borderRadius="2px"></Box>*/}
        {/*  </Center>*/}

        {/*  <Flex direction="column">*/}
        {/*    <Heading*/}
        {/*      mb="3.5"*/}
        {/*      fontFamily="Gilroy-Bold"*/}
        {/*      fontSize="12px"*/}
        {/*      lineHeight="16px"*/}
        {/*      letterSpacing="0.02em"*/}
        {/*    >*/}
        {/*      21.10.2023*/}
        {/*    </Heading>*/}
        {/*    <Heading*/}
        {/*      as="h3"*/}
        {/*      mb="1"*/}
        {/*      fontFamily="Gilroy-Medium"*/}
        {/*      fontSize="14px"*/}
        {/*      lineHeight="18px"*/}
        {/*      letterSpacing="0.02em"*/}
        {/*      color="brand.accent"*/}
        {/*    >*/}
        {/*      7.6%*/}
        {/*    </Heading>*/}
        {/*    <Text*/}
        {/*      mb="32px"*/}
        {/*      fontFamily="Gilroy-Medium"*/}
        {/*      fontSize="10px"*/}
        {/*      lineHeight="12px"*/}
        {/*      letterSpacing="0.02em"*/}
        {/*    >*/}
        {/*      29 minutes*/}
        {/*    </Text>*/}
        {/*  </Flex>*/}

        {/*  <Flex align="center" gap="2">*/}
        {/*    <Flex direction="column" align="flex-end">*/}
        {/*      <Heading*/}
        {/*        as="h3"*/}
        {/*        mb="3.5"*/}
        {/*        fontFamily="Gilroy-Medium"*/}
        {/*        fontSize="12px"*/}
        {/*        lineHeight="16px"*/}
        {/*      >*/}
        {/*        42 pages*/}
        {/*      </Heading>*/}

        {/*      <Box mb="7px" h="18px" w="43px">*/}
        {/*        <Image src={blockStat} />*/}
        {/*      </Box>*/}

        {/*      <Text*/}
        {/*        w="43px"*/}
        {/*        fontFamily="Gilroy-Medium"*/}
        {/*        fontSize="10px"*/}
        {/*        lineHeight="12px"*/}
        {/*      >*/}
        {/*        45 pages per huor*/}
        {/*      </Text>*/}
        {/*    </Flex>*/}

        {/*    <Image*/}
        {/*      h="3.5"*/}
        {/*      w="3.5"*/}
        {/*      src={trash2}*/}
        {/*      alt="delete day"*/}
        {/*      cursor="pointer"*/}
        {/*      onClick={() => console.log('delete item')}*/}
        {/*    />*/}
        {/*  </Flex>*/}
        {/*</List.Item>*/}

        {/*<List.Item*/}
        {/*  position="relative"*/}
        {/*  justifyContent="space-between"*/}
        {/*  ml="2"*/}
        {/*  pl="4"*/}
        {/*  color="brand.muted"*/}
        {/*  borderLeft="3px solid"*/}
        {/*  borderColor="brand.bgSecondary"*/}
        {/*  // _hover={{*/}
        {/*  //   '&>div:first-child, & h2': {*/}
        {/*  //     borderColor: 'brand.accent',*/}
        {/*  //     color: 'brand.accent'*/}
        {/*  //   }*/}
        {/*  // }}*/}
        {/*>*/}
        {/*  <Center*/}
        {/*    position="absolute"*/}
        {/*    top="0"*/}
        {/*    left="-9.5px"*/}
        {/*    h="16px"*/}
        {/*    w="16px"*/}
        {/*    bg="brand.muted"*/}
        {/*    borderRadius="4px"*/}
        {/*  >*/}
        {/*    <Box h="8px" w="8px" bg="brand.bgPrimary" borderRadius="2px"></Box>*/}
        {/*  </Center>*/}

        {/*  <Flex direction="column">*/}
        {/*    <Heading*/}
        {/*      mb="3.5"*/}
        {/*      fontFamily="Gilroy-Bold"*/}
        {/*      fontSize="12px"*/}
        {/*      lineHeight="16px"*/}
        {/*      letterSpacing="0.02em"*/}
        {/*    >*/}
        {/*      21.10.2023*/}
        {/*    </Heading>*/}
        {/*    <Heading*/}
        {/*      as="h3"*/}
        {/*      mb="1"*/}
        {/*      fontFamily="Gilroy-Medium"*/}
        {/*      fontSize="14px"*/}
        {/*      lineHeight="18px"*/}
        {/*      letterSpacing="0.02em"*/}
        {/*      color="brand.accent"*/}
        {/*    >*/}
        {/*      7.6%*/}
        {/*    </Heading>*/}
        {/*    <Text*/}
        {/*      mb="32px"*/}
        {/*      fontFamily="Gilroy-Medium"*/}
        {/*      fontSize="10px"*/}
        {/*      lineHeight="12px"*/}
        {/*      letterSpacing="0.02em"*/}
        {/*    >*/}
        {/*      29 minutes*/}
        {/*    </Text>*/}
        {/*  </Flex>*/}

        {/*  <Flex align="center" gap="2">*/}
        {/*    <Flex direction="column" align="flex-end">*/}
        {/*      <Heading*/}
        {/*        as="h3"*/}
        {/*        mb="3.5"*/}
        {/*        fontFamily="Gilroy-Medium"*/}
        {/*        fontSize="12px"*/}
        {/*        lineHeight="16px"*/}
        {/*      >*/}
        {/*        42 pages*/}
        {/*      </Heading>*/}

        {/*      <Box mb="7px" h="18px" w="43px">*/}
        {/*        <Image src={blockStat} />*/}
        {/*      </Box>*/}

        {/*      <Text*/}
        {/*        w="43px"*/}
        {/*        fontFamily="Gilroy-Medium"*/}
        {/*        fontSize="10px"*/}
        {/*        lineHeight="12px"*/}
        {/*      >*/}
        {/*        45 pages per huor*/}
        {/*      </Text>*/}
        {/*    </Flex>*/}

        {/*    <Image*/}
        {/*      h="3.5"*/}
        {/*      w="3.5"*/}
        {/*      src={trash2}*/}
        {/*      alt="delete day"*/}
        {/*      cursor="pointer"*/}
        {/*      onClick={() => console.log('delete item')}*/}
        {/*    />*/}
        {/*  </Flex>*/}
        {/*</List.Item>*/}
      </List.Root>
    </Flex>
  )
}

export default Diary
