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
