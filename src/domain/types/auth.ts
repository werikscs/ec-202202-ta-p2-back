export type RegisterUserInput = {
  name: string
  email: string
  password: string
}

export type RegisterUserOutput = {
  id: string
  name: string
  email: string
}

export type LoginUserInput = {
  email: string
  password: string
}

export type LoginUserOutput = {
  token: string
}

export type User = {
  id: string
  email: string
  name: string
  password: string
}
