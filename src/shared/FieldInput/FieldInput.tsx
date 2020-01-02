import React from 'react';
import { FieldProps } from 'formik';
import * as S from './FieldInput.styles';
import { LoginFormValues } from '../../pages/Login/Login.types';

export interface FieldInputProps {
  padding: 'string';
}

export type FieldInputFormikProps = FieldProps<LoginFormValues> &
  FieldInputProps;
const FieldInput: React.SFC<FieldInputFormikProps> = ({
  field,
  form,
  ...props
}) => {
  return <S.FieldInput {...field} {...props} />;
};

export default FieldInput;
// https://scottdj92.ghost.io/building-dynamic-forms-with-formik-with-react-and-typescript/
