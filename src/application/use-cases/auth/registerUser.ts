import { v4 as uuidv4 } from 'uuid'
import { IAuthRepository } from '../../../domain/repositories/auth'
import {
  RegisterUserInput,
  RegisterUserOutput,
} from '../../../domain/types/auth'
import CustomError from '../../../interface-adapters/errors/customError'

class RegisterUserUseCase {
  constructor(readonly authUserRepository: IAuthRepository) {}

  async execute(input: RegisterUserInput): Promise<RegisterUserOutput> {
    const emailFound = await this.authUserRepository.findByEmail(input.email)

    if (emailFound) {
      throw new CustomError(400, 'Email already taken')
    }

    const id = uuidv4()
    const newInput = { ...input, id }

    const output = await this.authUserRepository.create(newInput)

    return output
  }
}

export default RegisterUserUseCase
