import fastifyJwt, { JWT } from '@fastify/jwt'
import Fastify, { FastifyInstance } from 'fastify'
import { loginRouter } from '../routes/login-routes'

const app = Fastify({
  logger: true,
})

app.register(loginRouter)

app.register(fastifyJwt, {
  secret: process.env.JWT_SECRET || '',
})
export { app }
