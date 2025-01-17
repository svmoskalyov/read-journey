import { useEffect, useState } from 'react'
import { Flex, Heading, createListCollection, Grid } from '@chakra-ui/react'
import {
  SelectContent, SelectItem, SelectRoot, SelectTrigger, SelectValueText
} from '@/components/ui/select.jsx'
import BookZeroItem from './BookZeroItem'
import BookItem from './BookItem'
import { useAuthStore } from '@/stores/authStore.js'
import { getDatabase, ref, onValue } from 'firebase/database'
import { useLibraryStore } from '@/stores/booksStore.js'

const filter = createListCollection({
  items: [
    { label: 'Unread', value: 'unread' },
    { label: 'In progress', value: 'progress' },
    { label: 'Done', value: 'done' },
    { label: 'All books', value: 'all' }
  ]
})

function MyLibrary() {
  const [value, setValue] = useState(['all'])
  const uid = useAuthStore(state => state.uid)
  const books = useLibraryStore(state => state.books)
  const setBooks = useLibraryStore(state => state.setBooks)

  const handleChange = e => {
    setValue(e.value)
    console.log('🚀 ~ handleChange ~ value:', e.value[0])
  }

  useEffect(() => {
    if (uid === null) return
    const booksRef = ref(getDatabase(), `users/${uid}`)
    onValue(booksRef, snapshot => {
      if (snapshot.exists()) {
        const data = snapshot.val()
        const books = Object.entries(data).map(([id, book]) => ({
          id, ...book
        }))
        setBooks(books)
      } else {
        console.log('No data available')
        setBooks([])
      }
    })
  }, [setBooks, uid])

  return (
    <Flex
      direction="column"
      gap={{ base: '23px', tablet: '14px', desktop: '161px' }}
      w="full"
      overflow="hidden"
    >
      <Flex justify="space-between" align="center">
        <Heading
          fontFamily="Gilroy-Bold"
          fontSize={{ base: '20px', tablet: '28px' }}
          lineHeight={{ base: '20px', tablet: '32px' }}
        >
          My library
        </Heading>
        <SelectRoot
          size="md"
          width={{ base: '120px', tablet: '153px' }}
          collection={filter}
          value={value}
          onValueChange={handleChange}
          fontFamily="Gilroy-Medium"
          fontSize={{ base: '12px', tablet: '14px' }}
          lineHeight={{ base: '16px', tablet: '18px' }}
        >
          <SelectTrigger>
            <SelectValueText
              fontFamily="Gilroy-Medium"
              fontSize={{ base: '12px', tablet: '14px' }}
              lineHeight={{ base: '16px', tablet: '18px' }}
              color="brand.accent"
              placeholder="All books"
            />
          </SelectTrigger>
          <SelectContent
            fontFamily="Gilroy-Medium"
            fontSize={{ base: '12px', tablet: '14px' }}
            lineHeight={{ base: '16px', tablet: '18px' }}
            color="brand.muted"
            bg="brand.bgInput"
            rounded="12px"
          >
            {filter.items.map(el => (
              <SelectItem key={el.value} item={el}>
                {el.label}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectRoot>
      </Flex>

      {books.length === 0 &&
        <Flex justify="center" align="center" h="full">
          <BookZeroItem />
        </Flex>
      }

      {books.length > 0 &&
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
          {books.map((book) => (
            <BookItem key={book.id} book={book} />
          ))}
        </Grid>
      }
    </Flex>
  )
}

export default MyLibrary
