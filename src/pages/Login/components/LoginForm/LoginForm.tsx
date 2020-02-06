import React from 'react';
import { Formik, Field, Form, FormikHelpers, FormikProps } from 'formik';

import FormWrapper from '../../../../components/FormWrapper/FormWrapper';
import FieldInput from '../../../../shared/components/FieldInput/FieldInput';
import FieldLabel from '../../../../shared/components/FieldLabel/FieldLabel';
import Button from '../../../../shared/components/Buttons/Button/Button';
import { LoginFormValues } from '../../Login.types';

export interface LoginFormProps {
  onSubmit: (
    values: LoginFormValues,
    actions: FormikHelpers<LoginFormValues>,
  ) => void;
}

const LoginForm: React.FunctionComponent<LoginFormProps> = ({ onSubmit }) => {
  const handleSubmit = (
    values: LoginFormValues,
    actions: FormikHelpers<LoginFormValues>,
  ): void => {
    actions.setSubmitting(false);
    onSubmit(values, actions);
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
            <Button type="submit">Submit</Button>
          </Form>
        </FormWrapper>
      )}
    />
  );
};

export default LoginForm;
