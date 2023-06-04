import { useField } from 'formik';
import React from 'react';

interface ICustomSelect {
  label: string;
  name: string;
  children: React.ReactNode;
}

function CustomSelect({ label, ...props }: ICustomSelect) {
  const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <select
        {...field}
        {...props}
        className={meta.touched && meta.error ? 'input-error' : ''}
      />
      {meta.touched && meta.error && <p className='error'>{meta.error}</p>}
    </>
  );
}

export default CustomSelect;
