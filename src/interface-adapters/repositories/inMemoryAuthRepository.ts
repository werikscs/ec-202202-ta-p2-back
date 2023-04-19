import { v4 as uuidv4 } from 'uuid'
import { IRegisterUserRepository } from '../../domain/repositories/auth'
import { RegisterUserInput, UserDataDB } from '../../domain/types/auth'
import fakeUserDB from '../../utils/fakeUserDB'
import CustomError from '../errors/customError'

class InMemoryAuthRepository implements IRegisterUserRepository {
  private userAuthData: UserDataDB[] = fakeUserDB

  async register(input: RegisterUserInput): Promise<void> {
    if (await this.isEmailAlreadyTaken(input.email)) {
      throw new CustomError(400, 'Email already taken')
    }

    const id = uuidv4()
    const newInput = { ...input, id }
    await this.userAuthData.push(newInput)
  }

  private async isEmailAlreadyTaken(email: string): Promise<boolean> {
    const emailFound = await this.userAuthData.find(
      (user) => user.email === email,
    )
    return Boolean(emailFound)
  }
}

export default InMemoryAuthRepository
