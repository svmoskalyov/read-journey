// import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  Button, Input, InputElement, Stack, Flex, Heading
} from '@chakra-ui/react'
import { Field } from '@/components/ui/field'
import DialogBookStat from '../DialogBookStat'
import Workout from './Workout'
import Expression from './Expression'

const schemaRec = yup.object({
  title: yup.string().notRequired(),
  author: yup.string().notRequired()
})

function Dashboard() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schemaRec) })
  // const [openDialog, setOpenDialog] = useState(false)

  // const toogleDialog = () => {
  //   setOpenDialog(!openDialog)
  // }

  const onSubmit = handleSubmit(data => {
    if (data.title === '' && data.author === '') return
    console.log(data)
  })

  return (
    <>
      <form style={{ width: '295px' }} onSubmit={onSubmit}>
        <Heading
          mb="2"
          pl="3"
          fontFamily="Gilroy-Medium"
          fontSize={{ base: '10px', tablet: '14px' }}
          lineHeight={{ base: '12px', tablet: '18px' }}
          letterSpacing="0.02em"
        >
          Filters:
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
              {...register('title')}
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
              {...register('author')}
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
            To apply
          </Button>
        </Flex>
      </form>

      <Workout />
      <Expression />
      {/*{openDialog && <DialogBookStat statBook={true} />}*/}
    </>
  )
}

export default Dashboard
