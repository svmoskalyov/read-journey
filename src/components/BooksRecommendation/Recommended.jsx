import { useEffect, useState } from 'react'
import { Flex, Heading, HStack, Grid } from '@chakra-ui/react'
import {
  PaginationNextTrigger, PaginationPrevTrigger, PaginationRoot
} from '@/components/ui/pagination.jsx'
import { useRecommendedStore } from '@/stores/recommendedStore.js'
import useMediaQuery from '@/hooks/useMediaQuery.js'
import usePagination from '@/hooks/usePagination.js'
import BookItem from './BookItem'

function Recommended() {
  const [itemsLimit, setItemsLimit] = useState(2)
  const getBooks = useRecommendedStore(state => state.getBooks)
  const books = useRecommendedStore(state => state.books)
  const title = useRecommendedStore(state => state.title)
  const author = useRecommendedStore(state => state.author)
  const isMobile = useMediaQuery('(max-width: 767px)')
  const isTablet = useMediaQuery('(min-width: 768px)')
  const isDesktop = useMediaQuery('(min-width: 1440px)')
  const {
    firstContentIndex, lastContentIndex, nextPage, prevPage
  } = usePagination({ contentPerPage: itemsLimit, count: books.length })

  if (!books.length) getBooks()
  const filteredBooks = books.filter(book => book.recommended)

  const booksFiltered = filteredBooks.filter(book => {
    if (filteredBooks.length === 0) return false
    if (title === '' && author === '') return true
    if (book.title === title && author === '' ||
      book.author === author && title === '' ||
      book.title === title && book.author === author
    ) return book
  })

  useEffect(() => {
    if (isMobile) setItemsLimit(2)
    if (isTablet) setItemsLimit(8)
    if (isDesktop) setItemsLimit(10)
  }, [isMobile, isTablet, isDesktop])

  return (<>
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
          count={filteredBooks.length}
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

      {filteredBooks.length === 0 && (
        <Flex>Recommended books is empty</Flex>
      )}
      {booksFiltered.length === 0 && (
        <Flex>Not found books</Flex>
      )}

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
          desktop: 'repeat(5, 1fr)'
        }}
      >
        {booksFiltered
          .slice(firstContentIndex, lastContentIndex)
          .map((book) => (
            <BookItem key={book.id} book={book} />
          ))}
      </Grid>
    </Flex>
  </>)
}

export default Recommended
