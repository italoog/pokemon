/* eslint-disable @typescript-eslint/no-explicit-any */
import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationsErrors(err: ValidationError): Errors {
  const validationError: Errors = {};

  err.inner.forEach((error: any) => {
    validationError[error.path] = error.message;
  });

  return validationError;
}
