import React from 'react';
import { Formik, Field, Form, FormikHelpers, FormikProps } from 'formik';

import FormWrapper from 'components/FormWrapper/FormWrapper';
import FieldInput from 'shared/components/FieldInput/FieldInput';
import FieldLabel from 'shared/components/FieldLabel/FieldLabel';
import Button from 'shared/components/Buttons/Button/Button';
import { PasswordResetFormValues } from '../../PasswordReset.types';

export interface PasswordResetFormProps {
  onSubmit: (
    values: PasswordResetFormValues,
    actions: FormikHelpers<PasswordResetFormValues>,
  ) => void;
}

const PasswordResetForm: React.SFC<PasswordResetFormProps> = ({ onSubmit }) => {
  const handleSubmit = (
    values: PasswordResetFormValues,
    actions: FormikHelpers<PasswordResetFormValues>,
  ): void => {
    actions.setSubmitting(false);
    onSubmit(values, actions);
  };

  return (
    <Formik
      initialValues={{ newPassword: '', newPasswordRepeat: '' }}
      onSubmit={handleSubmit}
      render={(props: FormikProps<PasswordResetFormValues>) => (
        <FormWrapper name="Password reset">
          <Form>
            <FieldLabel htmlFor="newPassword" name="new password" />
            <Field type="text" name="newPassword" component={FieldInput} />
            <FieldLabel
              htmlFor="newPasswordRepeat"
              name="repeat new password"
            />
            <Field
              name="newPasswordRepeat"
              type="newPasswordRepeat"
              component={FieldInput}
            />
            <Button type="submit">Submit</Button>
          </Form>
        </FormWrapper>
      )}
    />
  );
};

export default PasswordResetForm;
