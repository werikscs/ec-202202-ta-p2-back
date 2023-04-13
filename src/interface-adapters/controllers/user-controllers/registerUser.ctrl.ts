import { NextFunction, Request, Response } from 'express'

class RegisterUserController {
  constructor(readonly registerUserUseCase: RegisterUserUseCase) {}

  async handle(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void | Response> {
    const registerData = req.body
    console.log(registerData)
    try {
      const registerResult = await this.registerUserUseCase.execute(
        registerData,
      )
      return res.status(201).json({ message: 'Usuário registrado', data: {} })
    } catch (error) {
      next(error)
    }
  }
}

export default RegisterUserController
