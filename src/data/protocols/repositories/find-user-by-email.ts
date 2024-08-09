import { User } from '@/domain/models/user'

export interface FindUserByEmail {
  findUserByEmail(data: FindUserByEmail.Params): Promise<FindUserByEmail.Result>
}

export namespace FindUserByEmail {
  export type Params = { email: string }
  export type Result = { user: User }
}
