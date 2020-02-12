import React from 'react';
import { FieldProps } from 'formik';

import FieldLabel from '../FieldLabel/FieldLabel';
import * as S from './FieldWrapper.styles';

export interface FieldWrapperProps {
  field: any;
  children: JSX.Element[] | JSX.Element;
  label?: string;
}

const FieldWrapper: React.FunctionComponent<FieldWrapperProps> = ({
  field,
  children,
  label,
}) => {
  return (
    <S.Container>
      <FieldLabel htmlFor={field.name} name={label}></FieldLabel>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};

export default FieldWrapper;
// https://scottdj92.ghost.io/building-dynamic-forms-with-formik-with-react-and-typescript/

// 1. zrob dobre propsy dla fieldINputa
// 2. zrob errora
