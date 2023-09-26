import { BtnStyled } from 'components/Button/Button.styled';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  justify-items: center;
  row-gap: 15px;
  width: 1080px;
`;
export const ButtonGoBack = styled(BtnStyled)`
  display: grid;
  grid-template-columns: 20% 1fr;
  justify-items: center;
  align-items: center;
  justify-self: start;
  height: 40px;
`;
