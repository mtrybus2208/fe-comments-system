import React from 'react';
import Lottie from 'react-lottie';
import * as S from './Preloader.styles';
import animationData from './spinner.json';

export interface PreloaderProps {}

const Preloader: React.FunctionComponent<PreloaderProps> = (props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <S.Wrapper>
      <S.Preloader>
        <Lottie options={defaultOptions} height={250} width={250} />
      </S.Preloader>
    </S.Wrapper>
  );
};

export default Preloader;
