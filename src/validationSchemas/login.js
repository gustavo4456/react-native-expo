import * as yup from "yup";

export const loginValidationSchena=yup.object().shape({
    email: yup
        .string()
        .email()
        .required('email is required'),
    password: yup
        .string()
        .min(5,'Too short')
        .max(10,'Too long')
        .required('pass is required')
})