import {
  HashComparer,
  HashComparerProps,
} from '@/data/protocols/cryptography/hash-comparer'
import bcrypt from 'bcrypt'

export class BcryptAdapter implements HashComparer {
  async compare({ hashText, plainText }: HashComparerProps): Promise<boolean> {
    const hash = await bcrypt.hash(plainText, 6)
    console.log('---------------------')
    console.log({ hash })
    return await bcrypt.compare(plainText, hashText)
  }
}
