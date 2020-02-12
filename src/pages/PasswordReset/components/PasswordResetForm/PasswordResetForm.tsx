import React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import FormWrapper from '../../../../components/FormWrapper/FormWrapper';
import FieldInput from '../../../../shared/components/Fields/FieldInput/FieldInput';
import Button from '../../../../shared/components/Buttons/Button/Button';
import { PasswordResetFormValues } from '../../PasswordReset.types';

const Schema = Yup.object().shape({
  newPassword: Yup.string()
    .required('This field is required')
    .min(5, 'Password should be longer than 5 chars')
    .max(50, 'Password should be shorter than 50 chars'),
  newPasswordRepeat: Yup.string().when('newPassword', {
    is: val => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref('newPassword')],
      'Both password need to be the same',
    ),
  }),
});

const Error = ({ msg }) => <div style={{ color: 'red' }}>{msg}</div>;

export interface PasswordResetFormProps {
  onSubmit: (
    values: PasswordResetFormValues,
    actions: FormikHelpers<PasswordResetFormValues>,
  ) => void;
}

const PasswordResetForm: React.FunctionComponent<PasswordResetFormProps> = ({
  onSubmit,
}) => {
  const initialValues: PasswordResetFormValues = {
    newPassword: '',
    newPasswordRepeat: '',
  };

  const handleSubmit = (
    values: PasswordResetFormValues,
    actions: FormikHelpers<PasswordResetFormValues>,
  ): void => {
    actions.setSubmitting(false);
    onSubmit(values, actions);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={Schema}
    >
      {({
        values,
        errors,
        handleSubmit,
        handleChange,
        handleBlur,
        touched,
      }) => (
        <FormWrapper name="Password reset">
          <Form>
            <Field
              type="text"
              name="newPassword"
              label="New password"
              component={FieldInput}
            />
            {errors.newPassword && touched.newPassword && (
              <Error msg={errors?.newPassword} />
            )}

            <Field
              name="newPasswordRepeat"
              type="text"
              label="Repeat new password"
              component={FieldInput}
            />
            {errors.newPasswordRepeat && (
              <Error msg={errors?.newPasswordRepeat} />
            )}

            <Button type="submit">Submit</Button>
          </Form>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default PasswordResetForm;
