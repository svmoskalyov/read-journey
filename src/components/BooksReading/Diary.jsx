import { nanoid } from 'nanoid'
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
      let pages = 0
      const date = plusDay(book.progress[0].startReading, i)
      const booksFilter = book.progress.filter(el =>
        dateToLocal(el.startReading) === date)
      const booksFiltered = booksFilter.map(el => {
        const pid = nanoid()
        pages = Math.floor(el.finishPage - el.startPage)
        const procent = procentReading(el.startPage, el.finishPage)
        const time = timeReading(el.startReading, el.finishReading)
        const pageHour = pagesReadingHour(el.startPage, el.finishPage,
          el.startReading, el.finishReading)
        return { pid, procent, time, pageHour }
      })
      newBooks.push({ date, pages, items: booksFiltered })
    }
    return newBooks
  }

  useEffect(() => {
    if (!book) return
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
        {progress.map((book, id) => {
          return (
            <List.Item
              key={id}
              position="relative"
              ml="10px"
              pl="4"
              color="brand.muted"
              borderLeft="3px solid"
              borderColor="brand.bgSecondary"
              _hover={{
                '&>div:first-child': {
                  bg: 'brand.accent'
                },
                '& h2': {
                  color: 'brand.accent'
                }
              }}
            >
              <Center
                position="absolute"
                top="0"
                left="-12px"
                h="20px"
                w="20px"
                bg="brand.muted"
                borderRadius="4px"
              >
                <Box h="12px" w="12px" bg="brand.bgPrimary" borderRadius="2px"></Box>
              </Center>

              <Flex direction="column" w="full">
                <Flex justifyContent="space-between" mb="28px" pr="22px">
                  <Heading
                    fontFamily="Gilroy-Medium"
                    fontSize="16px"
                    lineHeight="18px"
                    letterSpacing="0.02em"
                  >
                    {book.date}
                  </Heading>
                  <Heading
                    as="h3"
                    fontFamily="Gilroy-Regular"
                    fontSize="14px"
                    lineHeight="18px"
                    letterSpacing="-0.02em"
                  >
                    {book.pages}
                    <Mark ml="2px">pages</Mark>
                  </Heading>
                </Flex>

                {book.items.map((reading) => {
                  return (
                    <Flex key={reading.pid} direction="column">
                      <Flex justifyContent="space-between">
                        <Heading
                          as="h3"
                          fontFamily="Gilroy-Regular"
                          fontSize="20px"
                          lineHeight="20px"
                          letterSpacing="0.02em"
                          color="brand.accent"
                        >
                          {reading.procent}%
                        </Heading>
                        <Flex align="center" gap="8px" h="30px">
                          <Box>
                            <Image
                              h="25px"
                              w="60px"
                              src={blockStat}
                            />
                          </Box>
                          <Image
                            h="3.5"
                            w="3.5"
                            src={trash2}
                            alt="delete day"
                            cursor="pointer"
                            onClick={() => console.log('delete item')}
                          />
                        </Flex>
                      </Flex>

                      <Flex justifyContent="space-between" mb="22px">
                        <Text
                          fontFamily="Gilroy-Medium"
                          fontSize="12px"
                          lineHeight="14px"
                          letterSpacing="-0.02em"
                        >
                          {reading.time <= 59 ? reading.time :
                            Math.floor(reading.time / 60)
                          }
                          <Mark ml="2px">
                            {reading.time <= 59 ? 'minutes' : 'hours'}
                          </Mark>
                        </Text>
                        <Text
                          pt="4px"
                          pr="22px"
                          w="82px"
                          fontFamily="Gilroy-Medium"
                          fontSize="12px"
                          lineHeight="14px"
                          textAlign="center"
                          letterSpacing="-0.02em"
                        >
                          {reading.pageHour}
                          <Mark ml="2px" textWrap="wrap">pages per huor</Mark>
                        </Text>
                      </Flex>
                    </Flex>
                  )
                })}
              </Flex>
            </List.Item>
          )
        })}
      </List.Root>
    </Flex>
  )
}

export default Diary
