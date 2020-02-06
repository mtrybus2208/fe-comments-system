import React, { useEffect } from 'react';
import { FormikHelpers } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import PasswordResetForm from './components/PasswordResetForm/PasswordResetForm';
import { PasswordResetFormValues } from './PasswordReset.types';
import { validateResetToken } from '../../actions/passwordResetToken/passwordResetToken';
import { PasswordResetTokenState } from '../../reducers/passwordResetToken/passwordResetToken.types';

type Params = { token: string };

export interface PasswordResetProps {}

const PasswordReset: React.FunctionComponent<PasswordResetProps> = ({
  match,
}: RouteComponentProps<Params>) => {
  const dispatch = useDispatch();

  const passwordResetToken: PasswordResetTokenState = useSelector(
    ({ passwordResetToken }: { passwordResetToken: PasswordResetTokenState }) =>
      passwordResetToken,
  );
  const { isValid, isPending } = passwordResetToken;

  useEffect(() => {
    const { token }: { token: string } = match.params;
    dispatch(validateResetToken(token));
  }, []);

  const handleSubmit = (
    values: PasswordResetFormValues,
    actions: FormikHelpers<PasswordResetFormValues>,
  ) => {
    console.log('Password changed');
    console.log({ values });
  };

  if (isPending) {
    return <p>Loading...</p>;
  }

  return isValid ? (
    <PasswordResetForm onSubmit={handleSubmit} />
  ) : (
    <p>Token Not valid</p>
  );
};

export default PasswordReset;
