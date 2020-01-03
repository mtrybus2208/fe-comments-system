import React, { MouseEvent } from 'react';
import { Formik, Field, Form, FormikHelpers, FormikProps } from 'formik';
import FormWrapper from '../../../../components/FormWrapper/FormWrapper';
import FieldInput from '../../../../shared/FieldInput/FieldInput';
import { LoginFormValues } from '../../Login.types';
import FieldLabel from '../../../../shared/FieldLabel/FieldLabel';

export interface LoginFormProps {
  onSubmit: (
    values: LoginFormValues,
    actions: FormikHelpers<LoginFormValues>,
  ) => void;
}

const LoginForm: React.SFC<LoginFormProps> = ({ onSubmit }) => {
  const handleSubmit = (
    values: LoginFormValues,
    actions: FormikHelpers<LoginFormValues>,
  ): void => {
    actions.setSubmitting(false);
    onSubmit(values, actions);
  };

  const handleChange = e => {
    if (!e.isTrusted) return;
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
      render={(props: FormikProps<LoginFormValues>) => (
        <FormWrapper name="Login">
          <Form>
            <FieldLabel htmlFor="email" name="Email Address" />
            <Field
              type="text"
              name="email"
              placeholder="Email"
              component={FieldInput}
            />
            <FieldLabel htmlFor="password" name="Password" />
            <Field
              name="password"
              type="password"
              placeholder="Your password"
              component={FieldInput}
            />
            <button type="submit">Submit</button>
          </Form>
        </FormWrapper>
      )}
    />
  );
};

export default LoginForm;
