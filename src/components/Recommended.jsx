import { Flex, Heading, HStack, Card, Image } from '@chakra-ui/react'
import {
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot
} from '@/components/ui/pagination'
import book1 from '@/assets/images/image 1.png'
import book2 from '@/assets/images/image 2.png'
import { useState } from 'react'
import DialogBook from './DialogBook'

function Recommended() {
  const [openDialog, setOpenDialog] = useState(false)

  const toogleDialog = () => {
    setOpenDialog(!openDialog)
  }

  return (
    <>
      <Flex direction="column" gap="5" w="full">
        <Flex justify="space-between">
          <Heading fontFamily="Gilroy-Bold" fontSize="20px" lineHeight="20px">
            Recommended
          </Heading>

          <PaginationRoot count={20} pageSize={2} defaultPage={1} maxW="240px">
            <HStack gap="2">
              <PaginationPrevTrigger
                h="32px"
                minW="32px"
                border="1px solid #f9f9f94d"
                color="brand.accent"
                rounded="50%"
              />
              <PaginationNextTrigger
                h="32px"
                minW="32px"
                border="1px solid #f9f9f94d"
                color="brand.accent"
                rounded="50%"
              />
            </HStack>
          </PaginationRoot>
        </Flex>
        <Flex justifyContent="space-between">
          <Card.Root
            maxW="248px"
            bg="brand.bgSecondary"
            color="brand.accent"
            border="none"
            overflow="hidden"
            onClick={toogleDialog}
          >
            <Image
              h="208px"
              w="137px"
              src={book1}
              alt="image book"
              rounded="8px"
            />
            <Card.Body p="0" pt="2">
              <Card.Title
                fontFamily="Gilroy-Bold"
                fontSize="14px"
                lineHeight="18px"
                letterSpacing="0.02em"
              >
                Lovers of Justice
              </Card.Title>
              <Card.Description
                fontFamily="Gilroy-Medium"
                fontSize="10px"
                lineHeight="12px"
                letterSpacing="0.02em"
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
              >
                It doesn&apos;t hurt
              </Card.Title>
              <Card.Description
                fontFamily="Gilroy-Medium"
                fontSize="10px"
                lineHeight="12px"
                letterSpacing="0.02em"
              >
                Kateryna Babkina
              </Card.Description>
            </Card.Body>
          </Card.Root>
        </Flex>
      </Flex>

      {openDialog && <DialogBook onClose={toogleDialog} />}
    </>
  )
}

export default Recommended
