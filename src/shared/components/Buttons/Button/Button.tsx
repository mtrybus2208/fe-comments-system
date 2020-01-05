import styled, { css } from 'styled-components';
import { pixelify } from '../../../../shared/helpers/styling/styling';

export interface ButtonProps {
  bgColor?: string;
  color?: string;
  borderRadius?: number | string;
  width?: number | string;
  height?: number | string;
  fontSize?: number | string;
}

const Button = styled.button`
  color: ${props => props.color || props.theme.white};
  background-color: ${props => props.bgColor || props.theme.accent};
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-shadow: none;
  border-radius: ${props => props.borderRadius || 0};
  padding: ${props => pixelify(props.padding) || '15px'};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  white-space: nowrap;
  font-size: 1rem;
  fontsize: ${props => pixelify(props.fontSize) || '13px'};
  line-height: 1;
  border: none;
  outline: none;
  width: ${props => pixelify(props.width) || '100%'};
  ${({ height }) =>
    height &&
    css`
      height: ${pixelify(height)};
    `};
`;

export default Button;
