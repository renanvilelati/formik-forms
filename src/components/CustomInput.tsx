import { useField } from 'formik';
import React from 'react';

interface ICustomInput {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

function CustomInput({ label, ...props }: ICustomInput) {
  const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? 'input-error' : ''}
      />
      <p>{meta.touched && meta.error && meta.error}</p>
    </>
  );
}

export default CustomInput;
