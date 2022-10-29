export interface FormData {
  name: string;
  lastName: string;
  email: string;
  phone?: string;
  password: string;
  passwordConfirmation?: string;
}

export interface FormErrors {
  name?: string;
  lastName?: string;
  email?: string;
  password?: string;
  passwordConfirmation?: string;
}
