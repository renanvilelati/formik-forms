import React from 'react';
import { Form, Formik } from 'formik';
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';
import { advancedSchema } from '@/schemas';
import CustomCheckbox from './CustonCheckbox';

const advancedOnSubmit = async (values: any, actions: any) => {
  await new Promise((resolve) =>
    setTimeout(() => {
      alert(JSON.stringify(values));
      actions.resetForm();
    }, 1000)
  );
};

const advancedInicialValues = {
  first_name: '',
  last_name: '',
  jobType: '',
  acceptedTos: '',
};

const AdvancedForm = () => {
  return (
    <Formik
      initialValues={advancedInicialValues}
      validationSchema={advancedSchema}
      onSubmit={advancedOnSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <CustomInput
            label='First Name'
            name='first_name'
            type='text'
            placeholder='Type your first name'
          />
          <CustomInput
            label='Last name'
            name='last_name'
            type='text'
            placeholder='Type your last name'
          />

          <CustomSelect label='Job Type' name='jobType'>
            <option value=''>Please select a job</option>
            <option value='developer'>Developer</option>
            <option value='designer'>Designer</option>
            <option value='manager'>Product Manager</option>
            <option value='other'>Other</option>
          </CustomSelect>

          <CustomCheckbox name='acceptedTos' type='checkbox' />

          <button disabled={isSubmitting} type='submit'>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AdvancedForm;
