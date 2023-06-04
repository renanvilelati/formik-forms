import { useField } from 'formik';
import React from 'react';

interface ICustomCheckbox {
  name: string;
  type: string;
}

function CustomCheckbox({ ...props }: ICustomCheckbox) {
  const [field, meta] = useField(props);

  return (
    <>
      <div className='checkbox'>
        <input
          {...field}
          {...props}
          className={meta.touched && meta.error ? 'input-error' : ''}
        />
        <span> I accept the term of service</span>
      </div>

      {meta.touched && meta.error && <p className='error'>{meta.error}</p>}
    </>
  );
}

export default CustomCheckbox;
