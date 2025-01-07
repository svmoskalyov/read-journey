import { useState } from 'react'
import { Flex, Heading, HStack, Card, Image, Grid } from '@chakra-ui/react'
import {
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot
} from '@/components/ui/pagination'
import book1 from '@/assets/images/image 1.png'
import book2 from '@/assets/images/image 2.png'
import DialogBook from './DialogBook'

function Recommended() {
  const [openDialog, setOpenDialog] = useState(false)

  const toogleDialog = () => {
    setOpenDialog(!openDialog)
  }

  return (
    <>
      <Flex direction="column" gap="5" w="full" overflow="hidden">
        <Flex justify="space-between">
          <Heading
            fontFamily="Gilroy-Bold"
            fontSize={{ base: '20px', tablet: '28px', desktop: '20px' }}
            lineHeight={{ base: '20px', tablet: '32px', desktop: '20px' }}
          >
            Recommended
          </Heading>
          <PaginationRoot count={20} pageSize={2} defaultPage={1} maxW="240px">
            <HStack gap="2">
              <PaginationPrevTrigger
                h={{ base: '32px', tablet: '40px', desktop: '20px' }}
                minW={{ base: '32px', tablet: '40px', desktop: '20px' }}
                border="1px solid #f9f9f94d"
                color="brand.accent"
                rounded="50%"
              />
              <PaginationNextTrigger
                h={{ base: '32px', tablet: '40px', desktop: '20px' }}
                minW={{ base: '32px', tablet: '40px', desktop: '20px' }}
                border="1px solid #f9f9f94d"
                color="brand.accent"
                rounded="50%"
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
        >
          <Card.Root
            maxW="248px"
            bg="brand.bgSecondary"
            color="brand.accent"
            border="none"
            overflow="hidden"
          >
            <Image
              h="208px"
              w="137px"
              src={book1}
              alt="image book"
              rounded="8px"
              onClick={toogleDialog}
            />
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
                Lovers of Justice
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
                Yuri Andrukhovych
              </Card.Description>
            </Card.Body>
          </Card.Root>

          <Card.Root
            maxW="248px"
            bg="brand.bgSecondary"
            color="brand.accent"
            border="none"
            overflow="hidden"
          >
            <Image
              h="208px"
              w="137px"
              src={book2}
              alt="image book"
              rounded="8px"
            />
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
                It doesn not hurt
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
                Kateryna Babkina
              </Card.Description>
            </Card.Body>
          </Card.Root>
          <Card.Root
            maxW="248px"
            bg="brand.bgSecondary"
            color="brand.accent"
            border="none"
            overflow="hidden"
          >
            <Image
              h="208px"
              w="137px"
              src={book1}
              alt="image book"
              rounded="8px"
              onClick={toogleDialog}
            />
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
                Lovers of Justice
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
                Yuri Andrukhovych
              </Card.Description>
            </Card.Body>
          </Card.Root>

          <Card.Root
            maxW="248px"
            bg="brand.bgSecondary"
            color="brand.accent"
            border="none"
            overflow="hidden"
          >
            <Image
              h="208px"
              w="137px"
              src={book2}
              alt="image book"
              rounded="8px"
            />
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
                It doesn not hurt
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
                Kateryna Babkina
              </Card.Description>
            </Card.Body>
          </Card.Root>
          <Card.Root
            maxW="248px"
            bg="brand.bgSecondary"
            color="brand.accent"
            border="none"
            overflow="hidden"
          >
            <Image
              h="208px"
              w="137px"
              src={book1}
              alt="image book"
              rounded="8px"
              onClick={toogleDialog}
            />
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
                Lovers of Justice
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
                Yuri Andrukhovych
              </Card.Description>
            </Card.Body>
          </Card.Root>

          <Card.Root
            maxW="248px"
            bg="brand.bgSecondary"
            color="brand.accent"
            border="none"
            overflow="hidden"
          >
            <Image
              h="208px"
              w="137px"
              src={book2}
              alt="image book"
              rounded="8px"
            />
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
                It doesn not hurt
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
                Kateryna Babkina
              </Card.Description>
            </Card.Body>
          </Card.Root>

          <Card.Root
            maxW="248px"
            bg="brand.bgSecondary"
            color="brand.accent"
            border="none"
            overflow="hidden"
          >
            <Image
              h="208px"
              w="137px"
              src={book1}
              alt="image book"
              rounded="8px"
              onClick={toogleDialog}
            />
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
                Lovers of Justice
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
                Yuri Andrukhovych
              </Card.Description>
            </Card.Body>
          </Card.Root>
        </Grid>
      </Flex>

      {openDialog && <DialogBook statBook={true} onClose={toogleDialog} />}
    </>
  )
}

export default Recommended
