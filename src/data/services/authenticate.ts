import { AuthenticationUseCase } from '@/domain/usecases/authenticate'
import { FindUserByEmail } from '../protocols/repositories/find-user-by-email'
import { HashComparer } from '../protocols/cryptography/hash-comparer'
import { UnauthorizedError } from '../../main/erros/unauthorized-error'

export class AuthenticationService implements AuthenticationUseCase {
  constructor(
    private findUserByEmail: FindUserByEmail,
    private hashComparer: HashComparer
  ) {}
  async execute({
    email,
    password,
  }: AuthenticationUseCase.Params): Promise<AuthenticationUseCase.Result> {
    const { user } = await this.findUserByEmail.findUserByEmail({ email })

    if (!user) {
      throw new UnauthorizedError()
    }

    const doesPasswordMatches = await this.hashComparer.compare({
      hashText: user.password,
      plainText: password,
    })

    if (!doesPasswordMatches) {
      console.log('LOGIN INVALIDO')
      throw new UnauthorizedError()
    }

    console.log(user)

    return {
      user,
    }
  }
}
