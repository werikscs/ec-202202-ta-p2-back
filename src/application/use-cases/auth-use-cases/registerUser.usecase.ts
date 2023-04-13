class RegisterUserUseCase {
  constructor(readonly authRepository: IAuthRepository) {}

  async perform(input: RegisterUserInput): Promise<RegisterUserOutput> {
    // check is email is already taken
    const registerUser = await this.authRepository.registerUser(input)
  }
}

export default RegisterUserUseCase
