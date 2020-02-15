import React from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import FormWrapper from '../../../../components/FormWrapper/FormWrapper';
import FieldInput from '../../../../shared/components/Fields/FieldInput/FieldInput';
import FieldSubmit from '../../../../shared/components/Fields/FieldSubmit/FieldSubmit';
import { PasswordResetFormValues } from '../../PasswordReset.types';
import { InputValidationTypes } from '../../../../types/shared/forms.types';

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
      }) => {
        return (
          <FormWrapper name="Password reset">
            <Form>
              <FieldInput
                type="text"
                name="newPassword"
                label="New password"
                error={errors.newPassword}
                touched={touched.newPassword}
                validationType={InputValidationTypes.ON_TOUCH}
              />
              <FieldInput
                type="text"
                name="newPasswordRepeat"
                label="Repeat new password"
                error={errors.newPasswordRepeat}
              />

              <FieldSubmit />
            </Form>
          </FormWrapper>
        );
      }}
    </Formik>
  );
};

export default PasswordResetForm;
