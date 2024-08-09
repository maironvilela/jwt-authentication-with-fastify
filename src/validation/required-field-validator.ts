import { Validation } from '../presentation/protocols/validations'

export class RequiredFieldValidation implements Validation {
  constructor(private readonly fieldName: string) {}

  validate(input: any): Error | null {
    if (!input[this.fieldName]) {
      return new Error(`Missing Param Error ${this.fieldName}`)
    }
    return null
  }
}
