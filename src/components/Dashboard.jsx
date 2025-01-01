import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  Button,
  Input,
  InputElement,
  Stack,
  Flex,
  Link,
  Heading,
  Text,
  Mark,
  Center,
  IconButton,
  Image
} from '@chakra-ui/react'
import { Field } from '@/components/ui/field'
import arrow from '@/assets/icons/arrow-right.svg'

const schema = yup
  .object({
    title: yup.string(),
    author: yup.string()
  })
  .required()

function Dashboard() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = handleSubmit(data => console.log(data))

  return (
    <>
      <form style={{ marginBottom: '20px', width: '100%' }} onSubmit={onSubmit}>
        <Heading
          mb="2"
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
              ps="6.25em"
              h="11"
              fontFamily="Gilroy-Medium"
              fontSize="12px"
              bg="brand.bgInput"
              rounded="12px"
              placeholder="Enter text"
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
              ps="6.85em"
              h="11"
              fontFamily="Gilroy-Medium"
              fontSize="12px"
              bg="brand.bgInput"
              rounded="12px"
              placeholder="Enter text"
              variant="subtle"
              {...register('author', { required: 'author is required' })}
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
            To apply
          </Button>
        </Flex>
      </form>

      <Flex
        direction="column"
        gap="5"
        p="5"
        h="244px"
        w="295px"
        bg="brand.bgInput"
        rounded="12px"
      >
        <Heading fontFamily="Gilroy-Bold" fontSize="18px" lineHeight="18px">
          Start your workout
        </Heading>

        <Flex gap="3">
          <Center
            h="10"
            minW="10"
            fontFamily="Gilroy-Bold"
            fontSize="18px"
            bg="brand.accent"
            color="brand.bgPrimary"
            rounded="50%"
          >
            1
          </Center>
          <Text
            fontFamily="Gilroy-Medium"
            fontSize="14px"
            lineHeight="18px"
            letterSpacing="0.02em"
            color="brand.muted"
          >
            <Mark pr="1" color="brand.accent">
              Create a personal library:
            </Mark>
            add the books you intend to read to it.
          </Text>
        </Flex>

        <Flex gap="3">
          <Center
            h="10"
            minW="10"
            fontFamily="Gilroy-Bold"
            fontSize="18px"
            bg="brand.accent"
            color="brand.bgPrimary"
            rounded="50%"
          >
            2
          </Center>
          <Text
            fontFamily="Gilroy-Medium"
            fontSize="14px"
            lineHeight="18px"
            letterSpacing="0.02em"
            color="brand.muted"
          >
            <Mark pr="1" color="brand.accent">
              Create your first workout:
            </Mark>
            define a goal, choose a period, start training.
          </Text>
        </Flex>

        <Flex justifyContent="space-between">
          <Link
            variant="underline"
            href="#"
            color="brand.muted"
            fontFamily="Gilroy-Medium"
            fontSize="14px"
            lineHeight="18px"
          >
            My library
          </Link>
          <IconButton
            variant="plain"
            h="24px"
            minW="24px"
            aria-label="link to my library"
          >
            <Image src={arrow} alt="arrow" h="24px" w="24px" />
          </IconButton>
        </Flex>
      </Flex>
    </>
  )
}

export default Dashboard
