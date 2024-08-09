import { FindUserByEmail } from '@/data/protocols/repositories/find-user-by-email'
import { PrismaClient } from '@prisma/client'
import { User } from '@/domain/models/user'

export class PrismaUsersRepository implements FindUserByEmail {
  prisma = new PrismaClient()

  async findUserByEmail({
    email,
  }: FindUserByEmail.Params): Promise<FindUserByEmail.Result> {
    const user = (await this.prisma.user.findUnique({
      where: { email },
    })) as User

    return { user }
  }
}
