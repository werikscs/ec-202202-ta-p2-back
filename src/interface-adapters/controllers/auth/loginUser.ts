import { Request, Response } from 'express'
import CustomError from '../../errors/customError'
import LoginUserUseCase from '../../../application/use-cases/auth/loginUser'

class LoginUserController {
  constructor(readonly loginUserUseCase: LoginUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body

    try {
      const output = await this.loginUserUseCase.perform({ email, password })
      return res.status(200).json({ token: output.token })
    } catch (error) {
      if (error instanceof CustomError) {
        return res.status(error.statusCode).json({ message: error.message })
      }
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  }
}

export default LoginUserController
