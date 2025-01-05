import { useState } from 'react'
import {
  Flex,
  Heading,
  Circle,
  Image,
  Text,
  Mark,
  createListCollection,
  Card,
  IconButton
} from '@chakra-ui/react'
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText
} from '@/components/ui/select'
import booksIcon from '@/assets/icons/books.svg'
import trash from '@/assets/icons/trash.svg'
import book7 from '@/assets/images/image 7.png'
import DialogBook from './DialogBook'

const frameworks = createListCollection({
  items: [
    { label: 'Unread', value: 'unread' },
    { label: 'In progress', value: 'progress' },
    { label: 'Done', value: 'done' },
    { label: 'All books', value: 'all' }
  ]
})

function MyLibrary() {
  const [value, setValue] = useState(['all'])
  const [openDialog, setOpenDialog] = useState(false)
  const booksLenght = 4

  const toogleDialog = () => {
    setOpenDialog(!openDialog)
  }

  const handleChange = e => {
    setValue(e.value)
    console.log('🚀 ~ handleChange ~ value:', e.value[0])
  }

  return (
    <Flex direction="column" gap="3.5" w="full">
      <Flex justify="space-between" align="center">
        <Heading fontFamily="Gilroy-Bold" fontSize="20px" lineHeight="20px">
          My library
        </Heading>
        <SelectRoot
          width="120px"
          size="md"
          collection={frameworks}
          value={value}
          onValueChange={handleChange}
          fontFamily="Gilroy-Medium"
          fontSize="12px"
          lineHeight="16px"
        >
          <SelectTrigger>
            <SelectValueText
              fontFamily="Gilroy-Medium"
              fontSize="12px"
              lineHeight="16px"
              color="brand.accent"
              placeholder="All books"
            />
          </SelectTrigger>
          <SelectContent
            fontFamily="Gilroy-Medium"
            fontSize="12px"
            lineHeight="16px"
            color="brand.muted"
            bg="brand.bgInput"
            rounded="12px"
          >
            {frameworks.items.map(movie => (
              <SelectItem item={movie} key={movie.value}>
                {movie.label}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectRoot>
      </Flex>

      <Flex
        justify={booksLenght === 0 ? 'center' : 'flex-start'}
        align="center"
      >
        {booksLenght === 0 && (
          <Flex w="197px" h="164px" direction="column" align="center">
            <Circle mb="2.5" size="100px" bg="brand.bgInput">
              <Image h="50px" w="50px" src={booksIcon} alt="image books" />
            </Circle>
            <Text
              fontFamily="Gilroy-Medium"
              fontSize="14px"
              lineHeight="18px"
              letterSpacing="0.02em"
              color="brand.accent"
              textAlign="center"
            >
              To start training, add{' '}
              <Mark px="1" color="brand.muted">
                some of your books
              </Mark>
              or from the recommended ones
            </Text>
          </Flex>
        )}

        {booksLenght > 0 && (
          <Flex>
            <Card.Root
              maxW="137px"
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
                onClick={toogleDialog}
              />
              <Card.Body
                p="0"
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
              >
                <Flex direction="column" minH="32px" w="97px">
                  <Card.Title
                    fontFamily="Gilroy-Bold"
                    fontSize="14px"
                    lineHeight="18px"
                    letterSpacing="0.02em"
                    overflow="hidden"
                    textWrap="nowrap"
                    textOverflow="ellipsis"
                  >
                    I See You Are Interested In The Dark
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
                    Hilarion Pavlyuk
                  </Card.Description>
                </Flex>
                <Flex alignItems="flex-end">
                  <IconButton
                    minW="28px"
                    h="28px"
                    aria-label="button delete"
                    bg="#E850501d"
                    border="1px solid #E850502d"
                    rounded="full"
                    onClick={() => console.log('book delete')}
                  >
                    <Image src={trash} alt="delete book" />
                  </IconButton>
                </Flex>
              </Card.Body>
            </Card.Root>
          </Flex>
        )}
      </Flex>

      {openDialog && <DialogBook onClose={toogleDialog} />}
    </Flex>
  )
}

export default MyLibrary
