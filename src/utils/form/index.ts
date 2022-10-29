import { FormData, FormErrors } from '../../types';

export const validate = (values: FormData): FormErrors => {
  const errors: FormErrors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.name) {
    errors.name = 'Name is required!';
  }
  if (!values.lastName) {
    errors.lastName = 'Last name is required';
  }
  if (!values.email) {
    errors.email = 'Email is required!';
  } else if (!regex.test(values.email)) {
    errors.email = 'This is not a valid email format!';
  }
  if (values.passwordConfirmation !== values.password) {
    errors.passwordConfirmation = 'Password must match';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 4) {
    errors.password = 'Password must be more than 4 characters';
  } else if (values.password.length > 10) {
    errors.password = 'Password cannot exceed more than 10 characters';
  }
  return errors;
};
