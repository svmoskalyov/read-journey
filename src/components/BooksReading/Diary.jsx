import { Box, Center, Flex, Heading, Image, List, Mark, Text } from '@chakra-ui/react'
import trash2 from '@/assets/icons/trash-2.svg'
import blockStat from '@/assets/icons/block.svg'
import { useReadingStore } from '@/stores/booksStore.js'
import { useEffect, useState } from 'react'

function Diary() {
  const book = useReadingStore(state => state.book)
  const [progress, setProgress] = useState([])
  console.log(progress)

  const dateToLocal = (startDay) => {
    return new Date(startDay).toLocaleDateString('de-DE')
  }

  const procentReading = (startPage, endPage) => {
    return Math.floor(((endPage - startPage) / book.totalPages) * 100)
  }

  const timeReading = (startDate, endDate) => {
    const dateStart = new Date(startDate)
    const dateEnd = new Date(endDate)
    const timeDifferenceMS = dateEnd - dateStart
    return Math.floor(timeDifferenceMS / 60000)
  }

  const pagesReadingHour = (startPage, endPage, startDate, endDate) => {
    const pages = endPage - startPage
    const timeDifferenceMins = timeReading(startDate, endDate)
    return Math.floor((pages * 60) / timeDifferenceMins)
  }

  const differenceDates = (startDate, endDate) => {
    const total = Date.parse(endDate) - Date.parse(startDate)
    return Math.floor(total / (1000 * 60 * 60 * 24))
  }

  const plusDay = (day, count) => {
    const getDay = new Date(day)
    const plusDay = getDay.setDate(getDay.getDate() + count)
    return dateToLocal(plusDay)
  }

  const progressReading = (arr) => {
    const newBooks = []
    const diffDays = differenceDates(book.progress[0].startReading,
      book.progress[arr.length - 1].startReading)

    for (let i = 0; i <= diffDays; i++) {
      const day = plusDay(book.progress[0].startReading, i)
      const booksFilter = book.progress.filter(el =>
        dateToLocal(el.startReading) === day)
      const booksFiltered = booksFilter.map(el => {
        const procent = procentReading(el.startPage, el.finishPage)
        const time = timeReading(el.startReading, el.finishReading)
        const pages = Math.floor(el.finishPage - el.startPage)
        const pageHour = pagesReadingHour(el.startPage, el.finishPage,
          el.startReading, el.finishReading)
        return { procent, time, pages, pageHour }
      })
      newBooks.push({ date: day, items: booksFiltered })
    }
    return newBooks
  }

  useEffect(() => {
    if (!book.progress) return
    setProgress(progressReading(book.progress))
  }, [book])

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

        {progress.map((item, id) => {
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
                  {item.date}
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
                  23%
                </Heading>
                <Text
                  mb="32px"
                  fontFamily="Gilroy-Medium"
                  fontSize="10px"
                  lineHeight="12px"
                  letterSpacing="0.02em"
                >
                  34
                  <Mark ml="2px">minutes</Mark>
                </Text>
              </Flex>

              <Flex align="center" gap="2">
                <Flex direction="column" align="center" w="50px">
                  <Heading
                    as="h3"
                    mb="3.5"
                    fontFamily="Gilroy-Medium"
                    fontSize="12px"
                    lineHeight="16px"
                  >
                    15
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
                    12
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
