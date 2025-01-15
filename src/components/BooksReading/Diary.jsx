import { Box, Center, Flex, Heading, Image, List, Text } from '@chakra-ui/react'
import trash2 from '@/assets/icons/trash-2.svg'
import blockStat from '@/assets/icons/block.svg'

function Diary() {
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

        <List.Item
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
              21.10.2023
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
              7.6%
            </Heading>
            <Text
              mb="32px"
              fontFamily="Gilroy-Medium"
              fontSize="10px"
              lineHeight="12px"
              letterSpacing="0.02em"
            >
              29 minutes
            </Text>
          </Flex>

          <Flex align="center" gap="2">
            <Flex direction="column" align="flex-end">
              <Heading
                as="h3"
                mb="3.5"
                fontFamily="Gilroy-Medium"
                fontSize="12px"
                lineHeight="16px"
              >
                42 pages
              </Heading>

              <Box mb="7px" h="18px" w="43px">
                <Image src={blockStat} />
              </Box>

              <Text
                w="43px"
                fontFamily="Gilroy-Medium"
                fontSize="10px"
                lineHeight="12px"
              >
                45 pages per huor
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

        <List.Item
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
              21.10.2023
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
              7.6%
            </Heading>
            <Text
              mb="32px"
              fontFamily="Gilroy-Medium"
              fontSize="10px"
              lineHeight="12px"
              letterSpacing="0.02em"
            >
              29 minutes
            </Text>
          </Flex>

          <Flex align="center" gap="2">
            <Flex direction="column" align="flex-end">
              <Heading
                as="h3"
                mb="3.5"
                fontFamily="Gilroy-Medium"
                fontSize="12px"
                lineHeight="16px"
              >
                42 pages
              </Heading>

              <Box mb="7px" h="18px" w="43px">
                <Image src={blockStat} />
              </Box>

              <Text
                w="43px"
                fontFamily="Gilroy-Medium"
                fontSize="10px"
                lineHeight="12px"
              >
                45 pages per huor
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

        <List.Item
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
              21.10.2023
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
              7.6%
            </Heading>
            <Text
              mb="32px"
              fontFamily="Gilroy-Medium"
              fontSize="10px"
              lineHeight="12px"
              letterSpacing="0.02em"
            >
              29 minutes
            </Text>
          </Flex>

          <Flex align="center" gap="2">
            <Flex direction="column" align="flex-end">
              <Heading
                as="h3"
                mb="3.5"
                fontFamily="Gilroy-Medium"
                fontSize="12px"
                lineHeight="16px"
              >
                42 pages
              </Heading>

              <Box mb="7px" h="18px" w="43px">
                <Image src={blockStat} />
              </Box>

              <Text
                w="43px"
                fontFamily="Gilroy-Medium"
                fontSize="10px"
                lineHeight="12px"
              >
                45 pages per huor
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
      </List.Root>
    </Flex>
  )
}

export default Diary
