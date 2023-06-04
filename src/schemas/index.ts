import * as yup from 'yup';

const requiredError = 'Required field';
const invalidEmailError = 'Invalid email';
const invalidFormatNumber = 'Invalid number format';
const invalidNegativeNumber = 'Only positive numbers';
const invalidPasswordFormat =
  'Must be at least 5 characters, 1 numeric, 1 letter';

interface IbasicSchema {
  email: string;
  age: number;
  password: string;
  confirmPassword: string;
}

const passwordRules =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;

export const basicSchema = yup.object().shape({
  email: yup.string().email(invalidEmailError).required(requiredError),
  age: yup
    .number()
    .positive(invalidNegativeNumber)
    .integer(invalidFormatNumber)
    .required(requiredError),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, invalidPasswordFormat)
    .required(requiredError),
  confirm_password: yup
    .string()
    .min(5)
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required(requiredError),
});

export const advancedSchema = yup.object().shape({
  first_name: yup
    .string()
    .min(3, 'First name must be at least 3 characters long')
    .required(requiredError),
  last_name: yup
    .string()
    .min(3, 'Last name must be at least 3 characters long')
    .required(requiredError),
  jobType: yup
    .string()
    .oneOf(['designer', 'developer', 'manager', 'other'], 'escolha um')
    .required(requiredError),
  acceptedTos: yup
    .boolean()
    .oneOf([true], 'Please accept the terms of service'),
});
