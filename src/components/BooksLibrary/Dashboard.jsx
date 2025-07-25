import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  Button, Input, InputElement, Stack, Flex, Heading, Text, parseColor
} from '@chakra-ui/react'
import {
  ColorPickerRoot, ColorPickerSwatchGroup, ColorPickerSwatchTrigger
} from '@/components/ui/color-picker'
import { Field } from '@/components/ui/field'
import DialogBookStat from '../DialogBookStat'
import RecommendedBooks from './RecommendedBooks'
import { useLibraryStore } from '@/stores/libraryStore.js'
import { nanoid } from 'nanoid'

const schemaLib = yup
  .object({
    title: yup.string().required('Page is required'),
    author: yup.string().required('Page is required'),
    totalPages: yup
      .number()
      .typeError('Must be only digits')
      .positive('Must be a positive number')
      .integer('Must be an integer')
      .min(1, 'Must be greater than 0')
      .max(9999, 'Must be less than 9999')
      .required('Pages is required'),
    color: yup.string().required('Color is required')
  })
  .required()

function Dashboard() {
  const {
    reset,
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: { color: 'rgba(232, 21, 48, 1)' },
    resolver: yupResolver(schemaLib)
  })
  const swatches = ['#e81530', '#074b90', '#432fa8', '#800080', '#006400']
  const addBook = useLibraryStore(state => state.addBook)
  const isAdded = useLibraryStore(state => state.isAdded)

  const onSubmit = (data) => {
    addBook({ ...data, id: nanoid() })
    reset()
  }

  return (
    <>
      <form style={{ width: '295px' }} onSubmit={handleSubmit(onSubmit)}>
        <Heading
          mb="2"
          pl="3"
          fontFamily="Gilroy-Medium"
          fontSize={{ base: '10px', tablet: '14px' }}
          lineHeight={{ base: '12px', tablet: '18px' }}
          letterSpacing="0.02em"
        >
          Create your library:
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
          <Field invalid={!!errors.totalPages} errorText={errors.totalPages?.message}>
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
              {...register('totalPages', { required: 'pages is required' })}
            />
          </Field>

          <Stack>
            <Controller
              name="color"
              control={control}
              render={({ field }) => (
                <ColorPickerRoot
                  name={field.name}
                  defaultValue={parseColor(field.value)}
                  onValueChange={e => field.onChange(e.valueAsString)}
                >
                  <ColorPickerSwatchGroup
                    alignItems="center"
                    gap="4"
                    h={{ base: '44px', tablet: '50px' }}
                    w="295px"
                    bg="brand.bgInput"
                    rounded="12px"
                  >
                    <Text
                      pl="3"
                      fontFamily="Gilroy-Medium"
                      fontSize={{ base: '12px', tablet: '14px' }}
                      lineHeight={{ base: '14px', tablet: '18px' }}
                      color="brand.muted"
                    >
                      Cover color:
                    </Text>
                    {swatches.map(item => (
                      <ColorPickerSwatchTrigger
                        swatchSize="5"
                        key={item}
                        value={item}
                      />
                    ))}
                  </ColorPickerSwatchGroup>
                </ColorPickerRoot>
              )}
            />
          </Stack>
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
            Add book
          </Button>
        </Flex>
      </form>

      <RecommendedBooks />
      {isAdded && <DialogBookStat />}
    </>
  )
}

export default Dashboard
