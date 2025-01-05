import { Box, Flex, Heading, Image, List, Text } from '@chakra-ui/react'
import diary from '@/assets/icons/hourglass.svg'
import statistics from '@/assets/icons/chart.svg'
import trash2 from '@/assets/icons/trash-2.svg'
import { useState } from 'react'

function Diary() {
  //   const [isVisible, setIsVisible] = useState(false)

  //   function over(e) {
  //     setIsVisible(true)
  //   }
  //   function out(e) {
  //     setIsVisible(false)
  // }
  
  return (
    <Flex
      direction="column"
      // outline="1px solid red"
    >
      <Flex
        mb="5"
        w="full"
        justifyContent="space-between"
        // outline="1px solid green"
      >
        <Heading
          fontFamily="Gilroy-Bold"
          fontSize="18px"
          lineHeight="18px"
          letterSpacing="-0.02em"
        >
          Diary
        </Heading>
        <Flex gap="2">
          <Image cursor="pointer" w="4" h="4" src={diary} alt="button diary" />
          <Image
            cursor="pointer"
            w="4"
            h="4"
            src={statistics}
            alt="button statistics"
          />
        </Flex>
      </Flex>

      <Flex
        p="4"
        pb="0"
        pl="23px"
        maxH="211px"
        w="295px"
        rounded="12px"
        bg="brand.bgInput"
      >
        <List.Root
          variant="plain"
          w="full"
          h="full"
          overflowY="auto"
          scrollbar="hidden"
          // outline="1px solid cyan"
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
            // outline="1px solid tomato"

            // css={{
            //   '&:hover h2': { color: 'brand.accent' }
            // }}

            // _hover={{
            //   '& h2': { color: 'brand.accent' }
            // }}

            _hover={{
              '&>div:first-child, & h2': {
                borderColor: 'brand.accent',
                color: 'brand.accent'
              }
            }}

            // onMouseOver={over}
            // onMouseOut={out}
          >
            <Box
              position="absolute"
              top="0"
              left="-9px"
              h="16px"
              w="16px"
              bg="brand.bgPrimary"
              border="4px solid"
              // borderColor="brand.accent"
              // borderColor={isVisible ? 'brand.accent' : 'brand.muted'}
              borderRadius="2px"
              // outline="1px solid cyan"
            ></Box>

            <Flex direction="column">
              <Heading
                mb="3.5"
                fontFamily="Gilroy-Bold"
                fontSize="12px"
                lineHeight="16px"
                letterSpacing="0.02em"
                // letterSpacing="-0.02em"
                // color="brand.accent"
                // color={isVisible ? 'brand.accent' : 'brand.muted'}
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
                // color="brand.muted"
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
                  // color="brand.muted"
                  fontFamily="Gilroy-Medium"
                  fontSize="12px"
                  lineHeight="16px"
                  // letterSpacing="0.02em"
                >
                  42 pages
                </Heading>
                <Box mb="7px" h="18px" w="43px" outline="1px solid green"></Box>
                <Text
                  w="43px"
                  // color="brand.muted"
                  fontFamily="Gilroy-Medium"
                  fontSize="10px"
                  lineHeight="12px"
                  // letterSpacing="0.02em"
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
            borderLeft="2px solid"
            borderColor="brand.bgSecondary"
            p="2"
            outline="1px solid tomato"
          >
            Item 2
          </List.Item>
          <List.Item
            borderLeft="2px solid"
            borderColor="brand.bgSecondary"
            p="2"
            // outline="1px solid tomato"
          >
            Item 3
          </List.Item>
          <List.Item
            borderLeft="2px solid"
            borderColor="brand.bgSecondary"
            p="2"
            // outline="1px solid tomato"
          >
            Item 4
          </List.Item>
          <List.Item
            borderLeft="2px solid"
            borderColor="brand.bgSecondary"
            p="2"
            // outline="1px solid tomato"
          >
            Item 5
          </List.Item>
          <List.Item
            borderLeft="2px solid"
            borderColor="brand.bgSecondary"
            p="2"
            // outline="1px solid tomato"
          >
            Item 6
          </List.Item>
          <List.Item
            borderLeft="2px solid"
            borderColor="brand.bgSecondary"
            p="2"
            // outline="1px solid tomato"
          >
            Item 7
          </List.Item>
          <List.Item
            borderLeft="2px solid"
            borderColor="brand.bgSecondary"
            p="2"
            // outline="1px solid tomato"
          >
            Item 8
          </List.Item>
        </List.Root>
      </Flex>
    </Flex>
  )
}

export default Diary
