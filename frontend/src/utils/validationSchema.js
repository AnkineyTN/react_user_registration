import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email address is not valid')
    .required('Email has required'),

  password: Yup.string()
    .min(8, 'The password has at least 8 characters')
    .required('The password has required'),
});

export const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email address is not valid')
    .required('Email has required'),

  password: Yup.string()
    .min(8, 'The password has at least 8 characters')
    .required('The password has required'),
});