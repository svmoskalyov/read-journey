import { Box, Flex, Heading, HStack, Text } from '@chakra-ui/react'
import {
  ProgressCircleRing,
  ProgressCircleRoot,
  ProgressCircleValueText
} from '@/components/ui/progress-circle.jsx'

function Statiatics() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      gap="6"
      p="4"
      h={{ base: '211px', tablet: '252px', desktop: '281px' }}
      w={{ base: '295px', tablet: '321px', desktop: '313px' }}
      rounded="12px"
      bg="brand.bgInput"
    >
      <HStack w="75px">
        <ProgressCircleRoot size="xl" value={40} colorPalette="green">
          <ProgressCircleRing cap="round" />
          <ProgressCircleValueText />
        </ProgressCircleRoot>
      </HStack>

      <Flex w={{ base: '90px', tablet: '108px' }} gap="2">
        <Box h="3.5" w="3.5" bg="brand.success" rounded="4px" />
        <Flex direction="column" gap="1.5">
          <Heading
            fontFamily="Gilroy-Medium"
            fontSize={{ base: '14px', tablet: '20px' }}
            lineHeight={{ base: '18px', tablet: '20px' }}
            letterSpacing="0.02em"
          >
            19.14%
          </Heading>
          <Text
            fontFamily="Gilroy-Medium"
            fontSize={{ base: '10px', tablet: '12px' }}
            lineHeight={{ base: '12px', tablet: '14px' }}
            color="brand.muted"
          >
            171 pages read
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Statiatics
