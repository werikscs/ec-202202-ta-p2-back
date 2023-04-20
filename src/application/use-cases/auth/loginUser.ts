import * as bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { IAuthRepository } from '../../../domain/repositories/auth'
import { LoginUserInput, LoginUserOutput } from '../../../domain/types/auth'
import CustomError from '../../../interface-adapters/errors/customError'

class LoginUserUseCase {
  constructor(readonly authUserRepository: IAuthRepository) {}

  async perform(input: LoginUserInput): Promise<LoginUserOutput> {
    const userFound = await this.authUserRepository.findByEmail(input.email)

    if (!userFound) {
      throw new CustomError(400, 'User not registered')
    }

    const { password } = input
    const userPassword = userFound.password
    const validPassword = await bcrypt.compare(password, userPassword)

    if (!validPassword) {
      throw new CustomError(401, 'Incorrect Credentials')
    }

    const token = jwt.sign({ id: userFound.id }, `${process.env.SECRET_KEY}`, {
      expiresIn: '24h',
    })

    return { token }
  }
}

export default LoginUserUseCase
