import { Button, Input, InputElement, Stack } from '@chakra-ui/react'
import { Field } from '@/components/ui/field'
import { useForm } from 'react-hook-form'

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <form onSubmit={onSubmit}>
      <Stack gap="2" align="flex-start" maxW="295px">
        <Field invalid={!!errors.name} errorText={errors.name?.message}>
          <InputElement fontFamily="Gilroy-Medium" fontSize="12px" color="brand.muted">
            Name:
          </InputElement>
          <Input
            ps="4.75em"
            fontFamily="Gilroy-Medium"
            fontSize="12px"
            bg="brand.bgInput"
            rounded="12px"
            placeholder="your name"
            variant="subtle"
            {...register('name', { required: 'Name is required' })}
          />
        </Field>




        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  )
}

export default RegisterForm