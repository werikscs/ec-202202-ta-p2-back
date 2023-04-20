import { Request, Response, NextFunction } from 'express'
import * as yup from 'yup'

const schemaValidator =
  (schema: yup.AnyObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate(req.body, { abortEarly: false })
      return next()
    } catch (err) {
      return res
        .status(400)
        .json({ message: (err as yup.ValidationError).errors.join(', ') })
    }
  }

export default schemaValidator
