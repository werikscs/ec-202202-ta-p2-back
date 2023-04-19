import { Request, Response, NextFunction } from 'express'
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

export default async function registerUserValidator(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    await registerUserSchema.validate(req.body, { abortEarly: false })
    return next()
  } catch (err) {
    return res
      .status(400)
      .json({ message: (err as yup.ValidationError).errors.join(', ') })
  }
}
