import * as yup from 'yup'

const registerUserSchema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^\w{2,}\s\w{2,}$/g,
      'name must contain at least two words and each word must be at least 2 letters long',
    )
    .required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
})

export default registerUserSchema
