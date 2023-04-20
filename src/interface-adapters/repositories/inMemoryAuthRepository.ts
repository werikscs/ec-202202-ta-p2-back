import { IAuthRepository } from '../../domain/repositories/auth'
import { RegisterUserOutput, User } from '../../domain/types/auth'
import fakeUserDB from '../../utils/fakeUserDB'

class InMemoryAuthRepository implements IAuthRepository {
  private userAuthData: User[] = fakeUserDB

  async create(input: User): Promise<RegisterUserOutput> {
    await this.userAuthData.push(input)
    const { id, name, email } = input
    return { id, name, email }
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const userFound = await this.userAuthData.find(
      (user) => user.email === email,
    )
    return userFound
  }
}

export default InMemoryAuthRepository
