import React from 'react';

import Button from '../../../../shared/components/Buttons/Button/Button';
import * as S from './FieldSubmit.styles';

export interface FieldSubmitProps {
  copy?: string;
}

const FieldSubmit: React.FunctionComponent<FieldSubmitProps> = ({
  copy = 'submit',
}) => (
  <S.FieldSubmit>
    <Button>
      <S.Copy>{copy}</S.Copy>
    </Button>
  </S.FieldSubmit>
);

export default FieldSubmit;
