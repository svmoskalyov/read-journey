import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Button, Input, InputElement, Stack, Flex } from '@chakra-ui/react'
import { Field } from '@/components/ui/field'
import { PasswordInput } from '@/components/ui/password-input'

const schemaLogin = yup
  .object({
    email: yup
      .string()
      .email()
      .min(3)
      .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
      .required(),
    password: yup.string().min(7).required()
  })
  .required()

// const schemaRegister = schemaLogin.yup
//   .object({
//     name: yup.string().min(2).required()
//   })
//   .required()

const schemaRegister = yup
  .object({
    name: yup.string().min(2).required(),
    email: yup
      .string()
      .email()
      .min(3)
      .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
      .required(),
    password: yup.string().min(7).required()
  })
  .required()

function AuthPage() {
  const [par, setPar] = useState('login')
  console.log('🚀 ~ AuthPage ~ par:', par)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(par ? schemaRegister : schemaLogin)
  })

  const onSubmit = handleSubmit(data => console.log(data))

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%'
      }}
      onSubmit={onSubmit}
    >
      <Stack gap="2" align="flex-start" maxW="295px">
        {par === 'register' && (
          <Field invalid={!!errors.name} errorText={errors.name?.message}>
            <InputElement
              fontFamily="Gilroy-Medium"
              fontSize="12px"
              color="brand.muted"
            >
              Name:
            </InputElement>
            <Input
              ps="4.65em"
              h="11"
              fontFamily="Gilroy-Medium"
              fontSize="12px"
              bg="brand.bgInput"
              rounded="12px"
              placeholder="Your Name"
              variant="subtle"
              {...register('name', { required: 'name is required' })}
            />
          </Field>
        )}

        <Field invalid={!!errors.email} errorText={errors.email?.message}>
          <InputElement
            fontFamily="Gilroy-Medium"
            fontSize="12px"
            color="brand.muted"
          >
            Email:
          </InputElement>
          <Input
            ps="4.25em"
            h="11"
            fontFamily="Gilroy-Medium"
            fontSize="12px"
            bg="brand.bgInput"
            rounded="12px"
            placeholder="Your Email"
            variant="subtle"
            {...register('email', { required: 'email is required' })}
          />
        </Field>

        <Field invalid={!!errors.password} errorText={errors.password?.message}>
          <InputElement
            fontFamily="Gilroy-Medium"
            fontSize="12px"
            color="brand.muted"
          >
            Password:
          </InputElement>
          <PasswordInput
            ps="6.25em"
            h="11"
            fontFamily="Gilroy-Medium"
            fontSize="12px"
            bg="brand.bgInput"
            rounded="12px"
            placeholder="Your Password"
            variant="subtle"
            {...register('password', { required: 'password is required' })}
          />
        </Field>
      </Stack>

      <Flex justifyContent="space-between" width="full">
        <Button
          h="42px"
          w="140px"
          fontFamily="Gilroy-Bold"
          fontSize="14px"
          rounded="30px"
          color="brand.bgSecondary"
          bg={'brand.accent'}
          type="submit"
        >
          {par === 'register' ? 'Registration' : 'Login'}
        </Button>

        {par === 'register' && (
          <Button
            variant="underline"
            p="0"
            fontFamily="Gilroy-Medium"
            fontSize="12px"
            color="brand.muted"
            textDecoration="underline"
            onClick={() => setPar('login')}
          >
            Already have an account?
          </Button>
        )}

        {par === 'login' && (
          <Button
            variant="underline"
            p="0"
            fontFamily="Gilroy-Medium"
            fontSize="12px"
            color="brand.muted"
            textDecoration="underline"
            onClick={() => setPar('register')}
          >
            Don’t have an account?
          </Button>
        )}
      </Flex>
    </form>
  )
}

export default AuthPage
