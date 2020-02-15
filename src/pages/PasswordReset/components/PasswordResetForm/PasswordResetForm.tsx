import React from 'react';
import { Formik, Form, FormikHelpers } from 'formik';

import FormWrapper from '../../../../components/FormWrapper/FormWrapper';
import FieldInput from '../../../../shared/components/Fields/FieldInput/FieldInput';
import FieldSubmit from '../../../../shared/components/Fields/FieldSubmit/FieldSubmit';
import { PasswordResetFormValues } from '../../PasswordReset.types';
import { InputValidationTypes } from '../../../../types/shared/forms.types';
import { passwordResetValidationSchema } from '../../../../shared/helpers/validations/passwordReset/passwordResetValidation';

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
      validationSchema={passwordResetValidationSchema}
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
                touched={touched.newPassword}
                validationType={InputValidationTypes.ON_TOUCH}
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
