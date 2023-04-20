import { Request, Response, Router } from 'express'
import { IAuthRepository } from '../../domain/repositories/auth'
import RegisterUserController from '../controllers/auth/registerUser'
import RegisterUserUseCase from '../../application/use-cases/auth/registerUser'
import InMemoryAuthRepository from '../repositories/inMemoryAuthRepository'
import schemaValidator from '../middlewares/validators/auth/schemaValidator'
import registerUserSchema from '../middlewares/validators/auth/registerUserSchema'
import loginUserSchema from '../middlewares/validators/auth/loginUserSchema'
import LoginUserUseCase from '../../application/use-cases/auth/loginUser'
import LoginUserController from '../controllers/auth/loginUser'

const authRouter = Router()

const registerUserFactory = () => {
  const repository: IAuthRepository = new InMemoryAuthRepository()
  const useCase = new RegisterUserUseCase(repository)
  const controller = new RegisterUserController(useCase)
  return controller
}

const loginUserFactory = () => {
  const repository: IAuthRepository = new InMemoryAuthRepository()
  const useCase = new LoginUserUseCase(repository)
  const controller = new LoginUserController(useCase)
  return controller
}

const registerUserController = registerUserFactory()
const loginUserController = loginUserFactory()

authRouter.post(
  '/register',
  schemaValidator(registerUserSchema),
  (req: Request, res: Response) => registerUserController.handle(req, res),
)

authRouter.post(
  '/login',
  schemaValidator(loginUserSchema),
  (req: Request, res: Response) => loginUserController.handle(req, res),
)

export default authRouter
