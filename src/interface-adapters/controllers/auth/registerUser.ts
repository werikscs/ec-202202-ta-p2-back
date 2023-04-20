import { Request, Response } from 'express'
import RegisterUserUseCase from '../../../application/use-cases/auth/registerUser'
import CustomError from '../../errors/customError'

class RegisterUserController {
  constructor(readonly registerUserUseCase: RegisterUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body

    try {
      const output = await this.registerUserUseCase.execute({
        name,
        email,
        password,
      })
      return res.status(201).json({ ...output })
    } catch (error) {
      if (error instanceof CustomError) {
        return res.status(error.statusCode).json({ message: error.message })
      }
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  }
}

export default RegisterUserController
