import { RequiredFieldValidation } from '../../../../validation/required-field-validator'
import { Validation } from '../../../../presentation/protocols/validations'
import { ValidationComposite } from '../../../../validation/validation-composite'

export const makeLoginValidationFactory = (): ValidationComposite => {
  const fields = ['email', 'password']
  const validations: Validation[] = []

  for (const field of fields) {
    console.log(field)
    validations.push(new RequiredFieldValidation(field))
  }

  return new ValidationComposite(validations)
}
