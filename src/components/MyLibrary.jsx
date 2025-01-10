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
    <Flex
      direction="column"
      gap={{ base: '23px', tablet: '14px', desktop: '161px' }}
      w="full"
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
          collection={frameworks}
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
          <Flex
            h={{ base: '164px', tablet: '186px' }}
            w={{ base: '197px', tablet: '274px' }}
            direction="column"
            align="center"
          >
            <Circle
              mb={{ base: '10px', tablet: '20px' }}
              size={{ base: '100px', tablet: '130px' }}
              bg="brand.bgInput"
            >
              <Image
                h={{ base: '50px', tablet: '70px' }}
                w={{ base: '50px', tablet: '70px' }}
                src={booksIcon}
                alt="image books"
              />
            </Circle>
            <Text
              fontFamily="Gilroy-Medium"
              fontSize="14px"
              lineHeight="18px"
              letterSpacing="-0.02em"
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
              {/* <Image
                mb="2"
                h="208px"
                w="137px"
                src={book7}
                alt="image book"
                rounded="8px"
                onClick={toogleDialog}
              /> */}

              <Flex
                direction="column"
                alignItems="center"
                mb="2"
                p="4"
                h="208px"
                w="137px"
                rounded="8px"
                bg="navy"
                // bg={cover}
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
                  letterSpacing="-0.02em"
                  overflow="hidden"
                  textWrap="nowrap"
                  textOverflow="ellipsis"
                  userSelect="none"
                >
                  Yuri Andrukhovych
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
                  Lovers of Justice
                </Heading>
              </Flex>

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

      {openDialog && <DialogBook statBook={false} onClose={toogleDialog} />}
    </Flex>
  )
}

export default MyLibrary
