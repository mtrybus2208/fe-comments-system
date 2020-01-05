import styled from 'styled-components';

export const FieldInput = styled.input`
  display: block;
  flex: 1;
  height: 60px;
  box-shadow: 0px 1px 1px 0 rgba(255, 255, 255, 0.07),
    inset 0px 3px 8px 0 rgba(0, 0, 0, 0.25);
  background-color: #15181b !important;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.25;
  letter-spacing: 0.1px;
  text-align: left;
  color: #5a5f6b;
  padding-left: 15px;
  width: 100%;
  margin-bottom: 50px;
  -webkit-box-shadow: 0 0 0px 1000px #15181b inset;

  &::placeholder {
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 2.25;
    color: #5a5f6b;
    text-transform: capitalize;
  }

  &:-webkit-autofill,
  :-webkit-autofill:focus {
    -webkit-text-fill-color: #5a5f6b;
  }
`;
