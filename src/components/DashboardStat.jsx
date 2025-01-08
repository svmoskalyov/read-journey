import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  Button,
  Input,
  InputElement,
  Stack,
  Flex,
  Heading,
  Circle,
  Text,
  Image
} from '@chakra-ui/react'
import { Field } from '@/components/ui/field'
import star from '@/assets/icons/star.svg'
import hourglassA from '@/assets/icons/hourglass-active.svg'
import hourglassU from '@/assets/icons/hourglass-unactive.svg'
import chartA from '@/assets/icons/pie-chart-active.svg'
import chartU from '@/assets/icons/pie-chart-unactive.svg'
import Diary from './Diary'
import Statiatics from './Statiatics'
import DialogBookStat from './DialogBookStat'

const schemaPage = yup
  .object({
    page: yup
      .number()
      .typeError('Must be only digits')
      .positive('Must be a positive number')
      .integer('Must be an integer')
      .min(1, 'Must be greater than 0')
      .max(9999, 'Must be less than 9999')
      .required('Page is required')
  })
  .required()

function DashboardStat() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schemaPage)
  })
  const [page, setPage] = useState()
  const [reading, setReading] = useState(true)
  const [hourglass, setHourglass] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)

  const toogleDialog = () => {
    setOpenDialog(!openDialog)
  }

  const onSubmit = handleSubmit(data => console.log(data))

  return (
    <>
      <form
        style={{ marginBottom: '40px', width: '295px' }}
        onSubmit={onSubmit}
      >
        <Heading
          mb="2"
          pl="3"
          fontFamily="Gilroy-Medium"
          fontSize={{ base: '10px', tablet: '14px' }}
          lineHeight={{ base: '12px', tablet: '18px' }}
        >
          {!reading ? 'Start page:' : 'Stop page:'}
        </Heading>

        <Stack gap="2" align="flex-start" mb="5" maxW="295px">
          <Field invalid={!!errors.page} errorText={errors.page?.message}>
            <InputElement
              fontFamily="Gilroy-Medium"
              fontSize={{ base: '12px', tablet: '14px' }}
              lineHeight={{ base: '14px', tablet: '18px' }}
              color="brand.muted"
            >
              Page number:
            </InputElement>
            <Input
              ps="8.05em"
              h={{ base: '44px', tablet: '50px' }}
              fontFamily="Gilroy-Medium"
              fontSize={{ base: '12px', tablet: '14px' }}
              lineHeight={{ base: '14px', tablet: '18px' }}
              bg="brand.bgInput"
              rounded="12px"
              variant="subtle"
              placeholder="0000"
              defaultValue={page}
              {...register('page', { required: 'page is required' })}
            />
          </Field>
        </Stack>

        <Flex justifyContent="space-between" width="full">
          <Button
            h={{ base: '38px', tablet: '42px' }}
            w={{ base: '98px', tablet: '122px' }}
            fontFamily="Gilroy-Bold"
            fontSize={{ base: '14px', tablet: '16px' }}
            lineHeight={{ base: '14px', tablet: '18px' }}
            rounded="30px"
            border="1px solid #f9f9f94d"
            bg="brand.bgSecondary"
            type="submit"
          >
            {!reading ? 'To start' : 'To stop'}
          </Button>
        </Flex>
      </form>

      {!reading && (
        <Flex
          direction="column"
          h={{ base: '244px', tablet: '272px' }}
          w={{ base: '295px', tablet: '321px' }}
          px={{ base: '0px', tablet: '10px' }}
        >
          <Heading
            mb="3.5"
            fontFamily="Gilroy-Bold"
            fontSize={{ base: '18px', tablet: '20px' }}
            lineHeight={{ base: '18px', tablet: '20px' }}
            letterSpacing="0.02em"
          >
            Progress
          </Heading>
          <Text
            mb={{ base: '20px', tablet: '50px' }}
            fontFamily="Gilroy-Medium"
            fontSize="14px"
            lineHeight="18px"
            letterSpacing="-0.02em"
            color="brand.muted"
          >
            Here you will see when and how much you read. To record, click on
            the red button above.
          </Text>
          <Circle
            mx="auto"
            size={{ base: '80px', tablet: '100px' }}
            bg="brand.bgInput"
          >
            <Image
              h={{ base: '32px', tablet: '50px' }}
              w={{ base: '32px', tablet: '50px' }}
              src={star}
              alt="image star"
            />
          </Circle>
        </Flex>
      )}

      {reading && (
        <Flex direction="column">
          <Flex
            mb={{ base: '20px', tablet: '16px' }}
            w="full"
            justifyContent="space-between"
          >
            <Heading
              fontFamily="Gilroy-Bold"
              fontSize={{ base: '18px', tablet: '20px' }}
              lineHeight={{ base: '18px', tablet: '20px' }}
              letterSpacing="-0.02em"
            >
              {hourglass ? 'Statistics' : 'Diary'}
            </Heading>

            <Flex gap="2">
              <Image
                cursor="pointer"
                h={{ base: '16px', tablet: '20px' }}
                w={{ base: '16px', tablet: '20px' }}
                src={hourglass ? hourglassU : hourglassA}
                alt="button diary"
              />
              <Image
                cursor="pointer"
                h={{ base: '16px', tablet: '20px' }}
                w={{ base: '16px', tablet: '20px' }}
                src={!hourglass ? chartU : chartA}
                alt="button statistics"
              />
            </Flex>
          </Flex>

          {hourglass && (
            <Text
              mt="4px"
              mb="20px"
              h="72px"
              w="293px"
              color="brand.muted"
              fontFamily="Gilroy-Medium"
              fontSize={{ desktop: '14px' }}
              lineHeight={{ desktop: '18px' }}
              hideBelow="desktop"
            >
              Each page, each chapter is a new round of knowledge, a new step
              towards understanding. By rewriting statistics, we create our own
              reading history.
            </Text>
          )}

          {hourglass ? <Statiatics /> : <Diary />}
          {openDialog && (
            <DialogBookStat statBook={false} onClose={toogleDialog} />
          )}
        </Flex>
      )}
    </>
  )
}

export default DashboardStat
