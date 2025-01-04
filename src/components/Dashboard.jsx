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
  Heading
} from '@chakra-ui/react'
import { Field } from '@/components/ui/field'
import Workout from './Workout'
import RecommendedBooks from './RecommendedBooks'
import DialogBookStat from './DialogBookStat'

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
      <form style={{ marginBottom: '20px', width: '100%' }} onSubmit={onSubmit}>
        <Heading
          mb="2"
          pl="3"
          fontFamily="Gilroy-Medium"
          fontSize="10px"
          lineHeight="12px"
          letterSpacing="0.12em"
        >
          Filters:
        </Heading>
        <Stack gap="2" align="flex-start" maxW="295px" mb="5">
          <Field invalid={!!errors.title} errorText={errors.title?.message}>
            <InputElement
              fontFamily="Gilroy-Medium"
              fontSize="12px"
              color="brand.muted"
            >
              Book title:
            </InputElement>
            <Input
              ps="6.45em"
              h="11"
              fontFamily="Gilroy-Medium"
              fontSize="12px"
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
              fontSize="12px"
              color="brand.muted"
            >
              The author:
            </InputElement>
            <Input
              ps="7.05em"
              h="11"
              fontFamily="Gilroy-Medium"
              fontSize="12px"
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
                fontSize="12px"
                color="brand.muted"
              >
                Number of pages:
              </InputElement>
              <Input
                ps="10.05em"
                h="11"
                fontFamily="Gilroy-Medium"
                fontSize="12px"
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
            {page === 'recommended' ? 'To apply' : 'Add book'}
          </Button>
        </Flex>
      </form>

      {page === 'recommended' ? <Workout /> : <RecommendedBooks />}
      {openDialog && <DialogBookStat onClose={toogleDialog} />}
    </>
  )
}

export default Dashboard
