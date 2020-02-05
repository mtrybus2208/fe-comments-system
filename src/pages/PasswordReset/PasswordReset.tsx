import React, { useEffect } from 'react';
import { FormikHelpers } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import PasswordResetForm from './components/PasswordResetForm/PasswordResetForm';
import { PasswordResetFormValues } from './PasswordReset.types';
import { validateResetToken } from 'actions/passwordResetToken/passwordResetToken';

type Params = { token: string };

export interface PasswordResetProps {}

const PasswordReset: React.SFC<PasswordResetProps> = ({
  match,
}: RouteComponentProps<Params>) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const { token }: { token: string } = match.params;
    console.log({ token });
  }, []);

  const handleSubmit = (
    values: PasswordResetFormValues,
    actions: FormikHelpers<PasswordResetFormValues>,
  ) => {
    console.log('Password changed');
    console.log({ values });
  };

  return <PasswordResetForm onSubmit={handleSubmit} />;
};

export default PasswordReset;
