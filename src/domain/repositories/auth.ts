import { RegisterUserOutput, User } from '../types/auth'

export interface IAuthRepository {
  create(input: User): Promise<RegisterUserOutput>
  findByEmail(input: string): Promise<User | undefined>
}
