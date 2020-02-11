import React from 'react';
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import FormWrapper from '../../../../components/FormWrapper/FormWrapper';
import FieldInput from '../../../../shared/components/FieldInput/FieldInput';
import FieldLabel from '../../../../shared/components/FieldLabel/FieldLabel';
import Button from '../../../../shared/components/Buttons/Button/Button';
import { PasswordResetFormValues } from '../../PasswordReset.types';

const Schema = Yup.object().shape({
  newPassword: Yup.string().required('This field is required'),
  newPasswordRepeat: Yup.string().when('newPassword', {
    is: val => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref('newPassword')],
      'Both password need to be the same',
    ),
  }),
});

const Error = ({ children }) => <div style={{ color: 'red' }}>{children}</div>;

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
            <FieldLabel htmlFor="newPassword" name="new password" />
            <Field type="text" name="newPassword" component={FieldInput} />
            <ErrorMessage component={Error} name="newPassword" />

            <FieldLabel
              htmlFor="newPasswordRepeat"
              name="repeat new password"
            />
            <Field
              name="newPasswordRepeat"
              type="newPasswordRepeat"
              component={FieldInput}
            />
            <ErrorMessage component={Error} name="newPasswordRepeat" />

            <Button type="submit">Submit</Button>
          </Form>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default PasswordResetForm;
