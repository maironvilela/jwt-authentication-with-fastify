import { AuthenticationUseCase } from '@/domain/usecases/authenticate'
import { Controllers } from '../protocols/controller'
import { Validation } from '../protocols/validations'
import { AuthenticationService } from '../../data/services/authenticate'

export class LoginController implements Controllers {
  constructor(
    private readonly validation: Validation,
    private authenticationService: AuthenticationService
  ) {}
  async handle(
    request: Controllers.HttpRequest
  ): Promise<Controllers.HttpResponse> {
    try {
      const { email, password } = request.body

      const error = this.validation.validate({ email, password })

      if (error) {
        return {
          statusCode: 400,
          body: { error: error.message },
        }
      }

      const user = await this.authenticationService.execute({ email, password })

      if (!user) {
        return {
          statusCode: 401,
          body: { error: 'Unauthorized' },
        }
      }

      return {
        statusCode: 200,
        body: {
          user,
        },
      }
    } catch (error) {
      return {
        statusCode: 401,
        body: { error: 'Unauthorized' }, // enviar mensagens de error correta
      }
    }
  }
}
