import React from 'react';

import { useFormik } from 'formik';
import { basicSchema } from '../schemas/index';

const onSubmit = async (values: any, actions: any) => {
  await new Promise((resolve) =>
    setTimeout(() => {
      actions.resetForm();
    }, 1000)
  );
};

function BasicFormik() {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleSubmit,
    handleBlur,
    handleChange,
  } = useFormik({
    initialValues: {
      email: '',
      age: '',
      password: '',
      confirm_password: '',
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(errors);

  return (
    <form onSubmit={handleSubmit}>
      <label>E-mail</label>
      <input
        type='text'
        autoComplete='email'
        name='email'
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.email && touched.email ? 'error' : ''}
      />
      <label>Age</label>
      <input
        type='number'
        autoComplete='off'
        name='age'
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.age && touched.age ? 'error' : ''}
      />
      <label>Password</label>
      <input
        type='password'
        autoComplete='off'
        name='password'
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.password && touched.password ? 'error' : ''}
      />
      <label>Confirm Password</label>
      <input
        type='password'
        autoComplete='off'
        name='confirm_password'
        value={values.confirm_password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.confirm_password && touched.confirm_password ? 'error' : ''
        }
      />
      <button disabled={isSubmitting}>Enviar</button>
    </form>
  );
}

export default BasicFormik;
