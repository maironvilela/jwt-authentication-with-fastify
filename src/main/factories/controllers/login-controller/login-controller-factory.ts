import { Controllers } from '@/presentation/protocols/controller'
import { makeLoginValidationFactory } from './login-validations-factory'
import { PrismaUsersRepository } from '../../../../infra/db/repository/prisma-users-repository'
import { BcryptAdapter } from '../../../..//infra/cryptography/bcrypt-adapter'
import { AuthenticationService } from '../../../../data/services/authenticate'
import { LoginController } from '../../../../presentation/controllers/login'

export const makeLoginControllerFactory = (): Controllers => {
  const validation = makeLoginValidationFactory()
  const findUserByEmail = new PrismaUsersRepository()

  const hashCompare = new BcryptAdapter()
  const authenticationService = new AuthenticationService(
    findUserByEmail,
    hashCompare
  )

  return new LoginController(validation, authenticationService)
}
