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
  Image,
  Text,
  Mark
} from '@chakra-ui/react'
import { Field } from '@/components/ui/field'
import Workout from './Workout'
import RecommendedBooks from './RecommendedBooks'
import DialogBookStat from './DialogBookStat'
import books from '@/assets/icons/books.svg'

const schemaRec = yup.object({
  title: yup.string().notRequired(),
  author: yup.string().notRequired()
})

const schemaLib = yup
  .object({
    title: yup.string().required('Page is required'),
    author: yup.string().required('Page is required'),
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

function Dashboard({ page }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(page === 'recommended' ? schemaRec : schemaLib)
  })
  const [openDialog, setOpenDialog] = useState(false)

  const toogleDialog = () => {
    setOpenDialog(!openDialog)
  }

  const onSubmit = handleSubmit(data => console.log(data))

  return (
    <>
      <form
        style={{ marginBottom: '20px', width: '295px' }}
        onSubmit={onSubmit}
      >
        <Heading
          mb="2"
          pl="3"
          fontFamily="Gilroy-Medium"
          fontSize={{ base: '10px', tablet: '14px' }}
          lineHeight={{ base: '12px', tablet: '18px' }}
          letterSpacing="0.02em"
        >
          {page === 'library' ? 'Create your library:' : 'Filters:'}
        </Heading>
        <Stack align="flex-start" gap="2" maxW="295px" mb="5">
          <Field invalid={!!errors.title} errorText={errors.title?.message}>
            <InputElement
              fontFamily="Gilroy-Medium"
              fontSize={{ base: '12px', tablet: '14px' }}
              lineHeight={{ base: '14px', tablet: '18px' }}
              color="brand.muted"
            >
              Book title:
            </InputElement>
            <Input
              ps="6.45em"
              h={{ base: '44px', tablet: '50px' }}
              fontFamily="Gilroy-Medium"
              fontSize={{ base: '12px', tablet: '14px' }}
              lineHeight={{ base: '14px', tablet: '18px' }}
              bg="brand.bgInput"
              rounded="12px"
              placeholder="Enter title"
              variant="subtle"
              {...register('title', { required: 'title is required' })}
            />
          </Field>

          <Field invalid={!!errors.author} errorText={errors.author?.message}>
            <InputElement
              fontFamily="Gilroy-Medium"
              fontSize={{ base: '12px', tablet: '14px' }}
              lineHeight={{ base: '14px', tablet: '18px' }}
              color="brand.muted"
            >
              The author:
            </InputElement>
            <Input
              ps="7.05em"
              h={{ base: '44px', tablet: '50px' }}
              fontFamily="Gilroy-Medium"
              fontSize={{ base: '12px', tablet: '14px' }}
              lineHeight={{ base: '14px', tablet: '18px' }}
              bg="brand.bgInput"
              rounded="12px"
              placeholder="Enter author"
              variant="subtle"
              {...register('author', { required: 'author is required' })}
            />
          </Field>

          {page === 'library' && (
            <Field invalid={!!errors.pages} errorText={errors.pages?.message}>
              <InputElement
                fontFamily="Gilroy-Medium"
                fontSize={{ base: '12px', tablet: '14px' }}
                lineHeight={{ base: '14px', tablet: '18px' }}
                color="brand.muted"
              >
                Number of pages:
              </InputElement>
              <Input
                ps="10.05em"
                h={{ base: '44px', tablet: '50px' }}
                fontFamily="Gilroy-Medium"
                fontSize={{ base: '12px', tablet: '14px' }}
                lineHeight={{ base: '14px', tablet: '18px' }}
                bg="brand.bgInput"
                rounded="12px"
                placeholder="Enter pages"
                variant="subtle"
                {...register('pages')}
              />
            </Field>
          )}
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
            {page === 'recommended' ? 'To apply' : 'Add book'}
          </Button>
        </Flex>
      </form>

      {page === 'recommended' ? <Workout /> : <RecommendedBooks />}
      {page === 'recommended' && (
        <Flex
          align="center"
          mt="20px"
          px="20px"
          py="15px"
          gap="14px"
          h="83px"
          w="313px"
          rounded="12px"
          bg="brand.bgInput"
          hideBelow="desktop"
        >
          <Image h="40px" w="40px" src={books} alt="image books" />
          <Text
            fontFamily="Gilroy-Medium"
            fontSize="14px"
            lineHeight="18px"
            letterSpacing="0.02em"
            color="brand.muted"
          >
            &quot;Books are<Mark color="brand.accent">windows</Mark>to the
            world, and reading is a journey into the unknown.&quot;
          </Text>
        </Flex>
      )}
      {openDialog && <DialogBookStat statBook={true} onClose={toogleDialog} />}
    </>
  )
}

export default Dashboard
