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
  const [hourglass, setHourglass] = useState(true)
  // const [chart, setChart] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)

  const toogleDialog = () => {
    setOpenDialog(!openDialog)
  }

  const onSubmit = handleSubmit(data => console.log(data))

  return (
    <>
      <form style={{ marginBottom: '40px', width: '100%' }} onSubmit={onSubmit}>
        <Heading
          mb="2"
          pl="3"
          fontFamily="Gilroy-Medium"
          fontSize="10px"
          lineHeight="12px"
          letterSpacing="0.12em"
        >
          {!reading ? 'Start page:' : 'Stop page:'}
        </Heading>

        <Stack gap="2" align="flex-start" mb="5" maxW="295px">
          <Field invalid={!!errors.page} errorText={errors.page?.message}>
            <InputElement
              fontFamily="Gilroy-Medium"
              fontSize="12px"
              color="brand.muted"
            >
              Page number:
            </InputElement>
            <Input
              ps="8.05em"
              h="11"
              fontFamily="Gilroy-Medium"
              fontSize="12px"
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
            h="38px"
            w="98px"
            fontFamily="Gilroy-Bold"
            fontSize="14px"
            lineHeight="14px"
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
        <Flex direction="column">
          <Heading
            mb="3.5"
            fontFamily="Gilroy-Bold"
            fontSize="18px"
            lineHeight="18px"
            letterSpacing="0.02em"
          >
            Progress
          </Heading>
          <Text
            mb="5"
            fontFamily="Gilroy-Medium"
            fontSize="14px"
            lineHeight="18px"
            letterSpacing="-0.02em"
            color="brand.muted"
          >
            Here you will see when and how much you read. To record, click on
            the red button above.
          </Text>
          <Circle mx="auto" size="80px" bg="brand.bgInput">
            <Image h="32px" w="32px" src={star} alt="image star" />
          </Circle>
        </Flex>
      )}

      {reading && (
        <Flex direction="column">
          <Flex mb="5" w="full" justifyContent="space-between">
            <Heading
              fontFamily="Gilroy-Bold"
              fontSize="18px"
              lineHeight="18px"
              letterSpacing="-0.02em"
            >
              {hourglass ? 'Statistics' : 'Diary'}
            </Heading>
            <Flex gap="2">
              <Image
                cursor="pointer"
                w="4"
                h="4"
                src={hourglass ? hourglassU : hourglassA}
                alt="button diary"
              />
              <Image
                cursor="pointer"
                w="4"
                h="4"
                src={!hourglass ? chartU : chartA}
                alt="button statistics"
              />
            </Flex>
          </Flex>

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
