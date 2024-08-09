import { Controllers } from '@/presentation/protocols/controller'
import { FastifyReply, FastifyRequest } from 'fastify'

export const AdapterFastifyAuth = (controller: Controllers) => {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const { statusCode, body } = await controller.handle({
        body: request.body,
      })

      if (statusCode === 200) {
        const user = body.user

        const payload = {
          id: user.id,
          name: user.name,
          email: user.email,
        }
        const token = await reply.jwtSign(payload, {
          sign: {
            sub: user.id,
          },
        })

        return reply.status(statusCode).send({ token })
      }

      reply.status(statusCode).send({
        error: body,
      })
    } catch (err) {
      console.log('ERROR')
    }
  }
}
