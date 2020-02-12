import React from 'react';
import { FieldProps } from 'formik';
import * as S from './FieldInput.styles';
import LoginFormValues from '../../../../pages/Login/Login.types';
import FieldWrapper from '../FieldWrapper/FieldWrapper';

/**
 * TODO: FIX TYPES!
 */
export interface FieldInputProps {
  padding: 'string';
}

export type FieldInputFormikProps = FieldProps<LoginFormValues> &
  FieldInputProps;

const FieldInput: React.FunctionComponent<FieldInputFormikProps> = ({
  field,
  form,
  ...props
}) => {
  console.log(field);
  return (
    <FieldWrapper field={field} {...props}>
      <S.FieldInput {...field} {...props} />
    </FieldWrapper>
  );
};

export default FieldInput;
