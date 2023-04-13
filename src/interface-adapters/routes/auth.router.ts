import { Request, Response, NextFunction, Router } from 'express'

const authRouter = Router()

authRouter.post(
  '/register',
  (req: Request, res: Response, next: NextFunction) => {
    console.log('register route')
  },
)

authRouter.post('/login', (req: Request, res: Response, next: NextFunction) => {
  console.log('login route')
})

export default authRouter
