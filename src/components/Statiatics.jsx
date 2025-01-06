import { Box, Flex, Heading, HStack, Text } from '@chakra-ui/react'
import {
  ProgressCircleRing,
  ProgressCircleRoot,
  ProgressCircleValueText
} from '@/components/ui/progress-circle'

function Statiatics() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      gap="6"
      p="4"
      h="211px"
      w="295px"
      rounded="12px"
      bg="brand.bgInput"
    >
      <HStack w="75px">
        <ProgressCircleRoot size="xl" value={40} colorPalette="green">
          <ProgressCircleRing cap="round" />
          <ProgressCircleValueText />
        </ProgressCircleRoot>
      </HStack>

      <Flex w="90px" gap="2">
        <Box h="3.5" w="3.5" bg="brand.success" rounded="4px" />
        <Flex direction="column" gap="1.5">
          <Heading
            fontFamily="Gilroy-Medium"
            fontSize="14px"
            lineHeight="18px"
            letterSpacing="0.02em"
          >
            19.14%
          </Heading>
          <Text
            fontFamily="Gilroy-Medium"
            fontSize="10px"
            lineHeight="12px"
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
