import styled from 'styled-components';
import { BtnStyled } from 'components/Button/Button.styled.js';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Contents = styled.div`
  display: grid;
  grid-template-areas:
  "a a"
  "b c";
  justify-items: center;
  align-items: center;
  max-width: 100%;
  height: 200px;
  row-gap: 25px;
  padding: 25px;
  background-color: #dadada;
  border-radius: 5px;
`;

export const Title = styled.h3`
  grid-area: a;
  justify-self: center;
  align-self: center;
`;
export const ConfirmBtn = styled(BtnStyled)`
  grid-area: b;
  justify-self: center;
  align-self: center;
`;

export const CancelBtn = styled(BtnStyled)`
  grid-area: c;
  justify-self: center;
  align-self: center;
`;
