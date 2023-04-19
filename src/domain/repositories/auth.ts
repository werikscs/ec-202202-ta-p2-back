export interface IRegisterUserRepository {
  register(input: any): Promise<void>
}

export interface ILoginUserRepository {
  login<Input, Output>(input: Input): Promise<Output>
}
