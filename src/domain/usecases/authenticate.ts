import { User } from '../models/user'

export interface AuthenticationUseCase {
  execute({}: AuthenticationUseCase.Params): Promise<AuthenticationUseCase.Result>
}

export namespace AuthenticationUseCase {
  export type Params = {
    email: string
    password: string
  }
  export type Result = {
    user: User
  }
}
