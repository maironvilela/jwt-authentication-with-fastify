import { FastifyInstance } from 'fastify'
import { AdapterFastifyAuth } from '../adapter/adapter-fastity-auth'
import { makeLoginControllerFactory } from '../factories/controllers/login-controller/login-controller-factory'

export async function loginRouter(app: FastifyInstance) {
  app.post('/auth', AdapterFastifyAuth(makeLoginControllerFactory()))
}
