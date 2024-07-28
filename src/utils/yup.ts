import * as Yup from 'yup';

const getUsernameValidations = {
  username: Yup.string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters long')
    .max(15, 'Username cannot be longer than 15 characters')
    .matches(
      /^[a-zA-Z0-9_]*$/,
      'Username can only contain letters, numbers, and underscores',
    ),
};

export const loginValidationSchema = Yup.object().shape({
  ...getUsernameValidations,
  password: Yup.string().required('Password is required'),
});

export const signupValidationSchema = Yup.object().shape({
  ...getUsernameValidations,
  password: Yup.string().required('Password is required'),
  email: Yup.string()
    .email('Enter a valid email address')
    .required('Email is required'),
});
