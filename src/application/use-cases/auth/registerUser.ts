import { IRegisterUserRepository } from '../../../domain/repositories/auth'
import { RegisterUserInput } from '../../../domain/types/auth'

class RegisterUserUseCase {
  constructor(readonly registerUserRepository: IRegisterUserRepository) {}

  async execute(input: RegisterUserInput): Promise<void> {
    await this.registerUserRepository.register(input)
  }
}

export default RegisterUserUseCase
