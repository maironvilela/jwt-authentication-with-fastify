import { PrismaClient } from '@prisma/client'
import { app } from './config/app'
import { hasSubscribers } from 'diagnostics_channel'

app.get('/', async function handler(request, reply) {
  return { hello: 'world' }
})

try {
  app.listen({ port: 3000 })
  console.log('Server listening on port 3000')
  insertData()
} catch (err) {
  //app.log.error(err)
  process.exit(1)
}

async function insertData() {
  const prisma = new PrismaClient()

  const user = await prisma.user.findUnique({
    where: { email: 'malika@email.com' },
  })

  if (!user) {
    await prisma.user.create({
      data: {
        name: 'Malika',
        email: 'malika@email.com',
        password:
          '$2b$06$lXQw/3v2zVi4K3.1XYAvIuFR7Plk9VA2TSN0IRcwJubRp6W26I9zO',
      },
    })
  }
}
