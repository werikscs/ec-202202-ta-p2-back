import { Request, Response, Router } from 'express'
import RegisterUserController from '../controllers/user/registerUser'
import RegisterUserUseCase from '../../application/use-cases/auth/registerUser'
import { IRegisterUserRepository } from '../../domain/repositories/auth'
import InMemoryAuthRepository from '../repositories/inMemoryAuthRepository'
import registerUserValidator from '../middlewares/auth/registerUserValidator'

const authRouter = Router()

const factoryRegisterUser = () => {
  const repository: IRegisterUserRepository = new InMemoryAuthRepository()
  const useCase = new RegisterUserUseCase(repository)
  const controller = new RegisterUserController(useCase)
  return controller
}

const registerUserController = factoryRegisterUser()

authRouter.post(
  '/register',
  registerUserValidator,
  (req: Request, res: Response) => registerUserController.handle(req, res),
)

// authRouter.post('/login', (req: Request, res: Response, next: NextFunction) => {
//   console.log('login route')
// })

export default authRouter
