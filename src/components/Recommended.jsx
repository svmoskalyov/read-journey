import { useEffect, useState } from 'react'
import {
  Flex,
  Heading,
  HStack,
  Card,
  Grid,
  Text
} from '@chakra-ui/react'
import {
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot
} from '@/components/ui/pagination'
import DialogBook from './DialogBook'
import { useRecommendedStore } from '@/stores/booksStore'
import useMediaQuery from '@/hooks/useMediaQuery'
import usePagination from '@/hooks/usePagination'

function Recommended() {
  const [openDialog, setOpenDialog] = useState(false)
  const getBooks = useRecommendedStore(state => state.getBooks)
  const books = useRecommendedStore(state => state.books)
  // const [booksRender, setBooksRender] = useState([])
  // const [totalPages, setTotalPages] = useState(0)
  const [itemsLimit, setItemsLimit] = useState(2)
  // const [currentPage, setCurrentPage] = useState(1)

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    totalPages
  } = usePagination({
    contentPerPage: itemsLimit,
    count: books.length
  })

  if (!books.length) getBooks()

  // if (!books.length) {
  //   console.log('get books')
  //   // getBooks()
  // }

  // const pagesTotal = Math.ceil(books.length / itemsLimit)

  // const prevPage = () => {
  //   console.log('prevPage')
  //   if (totalPages === 0) return
  //   setCurrentPage(totalPages - 1)
  // }

  // const nextPage = () => {
  //   console.log('nextPage')
  //   if (currentPage === totalPages) return
  //   setCurrentPage(totalPages + 1)
  // }

  const toogleDialog = () => {
    setOpenDialog(!openDialog)
  }

// const addBooksToRender = () => {
//   if (booksRender.length === 0) {
//     const arr = []
//     for (let i = 0; i < books.length; i++) {
//       if (i >= (currentPage - 1) * itemsLimit && i < currentPage * itemsLimit) {
//         // console.log(books[i])
//         arr.push(books[i])
//       }
//     }
//     setBooksRender(arr)
//   }
// }

  const isMobile = useMediaQuery('(max-width: 767px)')
  const isTablet = useMediaQuery('(min-width: 768px)')
  const isDesktop = useMediaQuery('(min-width: 1440px)')

  useEffect(() => {
    if (isMobile) setItemsLimit(2)
    if (isTablet) setItemsLimit(4)
    if (isDesktop) setItemsLimit(6)
  }, [isMobile, isTablet, isDesktop])

  return (
    <>
      <Flex direction="column" gap="5" w="full" overflow="hidden">
        <Flex justify="space-between">
          <Heading
            fontFamily="Gilroy-Bold"
            fontSize={{ base: '20px', tablet: '28px' }}
            lineHeight={{ base: '20px', tablet: '32px' }}
          >
            Recommended
          </Heading>
          <PaginationRoot
            count={books.length}
            pageSize={itemsLimit}
            defaultPage={1}
            maxW="240px"
          >
            <HStack gap="2">
              <PaginationPrevTrigger
                h={{ base: '32px', tablet: '40px' }}
                minW={{ base: '32px', tablet: '40px' }}
                border="1px solid #f9f9f94d"
                color="brand.accent"
                rounded="50%"
                onClick={prevPage}
              />
              <PaginationNextTrigger
                h={{ base: '32px', tablet: '40px' }}
                minW={{ base: '32px', tablet: '40px' }}
                border="1px solid #f9f9f94d"
                color="brand.accent"
                rounded="50%"
                onClick={nextPage}
              />
            </HStack>
          </PaginationRoot>
        </Flex>

        <Grid
          gapX="25px"
          gapY="27px"
          gridTemplateRows={{
            base: 'repeat(auto-fit, 1fr)',
            tablet: 'repeat(auto-fit, 1fr)',
            desktop: 'repeat(auto-fit, 1fr)'
          }}
          gridTemplateColumns={{
            base: 'repeat(2, 1fr)',
            tablet: 'repeat(4, 1fr)',
            desktop: 'repeat(6, 1fr)'
          }}
          // overflow="auto"
          // scrollbar="hidden"
        >

          {books
            .slice(firstContentIndex, lastContentIndex)
            .map((book) => (
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
            ))}
        </Grid>
      </Flex>

      {openDialog && <DialogBook statBook={true} onClose={toogleDialog} />}
    </>
  )
}

export default Recommended
