import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { getDatabase, onValue, ref } from 'firebase/database'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  Button, Input, InputElement, Stack, Flex, Heading, Circle, Text, Image
} from '@chakra-ui/react'
import { Field } from '@/components/ui/field.jsx'
import toast from '@/utils/toast'
import star from '@/assets/icons/star.svg'
import hourglassA from '@/assets/icons/hourglass-active.svg'
import hourglassU from '@/assets/icons/hourglass-unactive.svg'
import chartA from '@/assets/icons/pie-chart-active.svg'
import chartU from '@/assets/icons/pie-chart-unactive.svg'
import Diary from './Diary'
import Statiatics from './Statiatics'
import { useReadingStore } from '@/stores/readingStore.js'
import { useAuthStore } from '@/stores/authStore.js'

const schemaPage = yup
  .object({
    page: yup
      .number()
      .typeError('Must be only digits')
      .positive('Must be a positive number')
      .integer('Must be an integer')
      .min(0, 'Must be greater than')
      .max(9999, 'Must be less than 9999')
      .required('Page is required')
  })
  .required()

function Dashboard() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schemaPage)
  })
  const uid = useAuthStore(state => state.uid)
  const book = useReadingStore(state => state.book)
  const setBook = useReadingStore(state => state.setBook)
  const isReading = useReadingStore(state => state.isReading)
  const setReadingStart = useReadingStore(state => state.setReadingStart)
  const setReadingStop = useReadingStore(state => state.setReadingStop)
  const readingFinish = useReadingStore(state => state.readingFinish)
  const [hourglass, setHourglass] = useState(false)

  const page = book.progress ?
    Math.max(...Object.values(book.progress).map(p => p.finishPage)) : 0

  const toogleHourglass = () => {
    setHourglass(!hourglass)
  }

  const onSubmit = handleSubmit(data => {
    if (!isReading) {
      if (data.page < page) {
        return toast('warning',
          'The page number cannot be less than the page number read')
      }
      if (data.page >= book.totalPages) {
        return toast('warning',
          'The page number cannot be greater than the last page number')
      }
      setReadingStart(data)
    }
    if (isReading) {
      if (data.page === page) {
        return toast('warning',
          'The page number read must be greater than the starting page number')
      }
      setReadingStop(data)
    }
  })

  useEffect(() => {
    if (book.status === 'done') return
    const booksRef = ref(getDatabase(), `users/${uid}/${book.id}`)
    onValue(booksRef, snapshot => {
      if (book.status === 'done') return
      if (snapshot.exists()) {
        const data = snapshot.val()
        if (!data.progress) return
        if (data.status === 'done') {
          reset()
          return setBook(data)
        }
        const prBook = Object.entries(data.progress).map(([id, pr]) => ({
          id, ...pr
        }))
        prBook.sort((a, b) => a.finishPage - b.finishPage)
        const updBook = {
          ...data,
          progress: prBook
        }
        if (prBook[prBook.length - 1].finishPage === data.totalPages) {
          return readingFinish(updBook)
        }
        setBook(updBook)
      } else {
        console.log('No data available')
      }
    })
  }, [])

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
          {!isReading ? 'Start page:' : 'Stop page:'}
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
            {!isReading ? 'To start' : 'To stop'}
          </Button>
        </Flex>
      </form>

      {!isReading && (
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

      {isReading && (
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
                onClick={toogleHourglass}
              />
              <Image
                cursor="pointer"
                h={{ base: '16px', tablet: '20px' }}
                w={{ base: '16px', tablet: '20px' }}
                src={!hourglass ? chartU : chartA}
                alt="button statistics"
                onClick={toogleHourglass}
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
        </Flex>
      )}
    </>
  )
}

export default Dashboard
