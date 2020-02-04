import React from 'react';
import { FormikHelpers } from 'formik';

import PasswordResetForm from './components/PasswordResetForm/PasswordResetForm';
import { PasswordResetFormValues } from './PasswordReset.types';

export interface PasswordResetProps {}

const PasswordReset: React.SFC<PasswordResetProps> = () => {
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

// podepnij do reduxa
/**
 * zrob reducer narazie tylko
 * pobierz stan w tym komponencie i w zaleznosci od stanu wyswietl preloader albo oks wartosc
 *
 */
