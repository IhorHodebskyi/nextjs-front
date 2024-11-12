'use client';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import styles from './FormLogin.module.scss';
import Input from '../Input/Input';
import Link from 'next/link';
import { useLoginMutation } from '@/hook/useLoginMutation';

export interface ILoginDataProps {
  email: string;
  password: string;
}

const validationSchema = Yup.object({
  email: Yup.string()
    .required('The field is mandatory')
    .matches(
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      'Ensure your email includes an "@" symbol and a valid domain.'
    )
    .email('Invalid email address'),
  password: Yup.string()
    .min(6)
    .required('The password must contain 8 characters'),
});

const initialValues: ILoginDataProps = {
  email: '',
  password: '',
};

const FormLogin = () => {
  const { mutate, isPending } = useLoginMutation();

  const handleSubmit = (
    values: ILoginDataProps,
    { resetForm }: FormikHelpers<ILoginDataProps>
  ) => {
    console.log(values);
    mutate(values);
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={styles.form}>
            <h1>Log in</h1>
            <p>
              Already have an count?
              <span>
                <Link className={styles.link} href="/singup">
                  Sing Up
                </Link>
              </span>
            </p>

            <Input type="text" name="email" title="Email" />

            <Input
              type="password"
              name="password"
              hideToggle={true}
              title="Password"
            />

            <button
              className={styles.btnLogin}
              type="submit"
              disabled={isPending}
            >
              Log in
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormLogin;
