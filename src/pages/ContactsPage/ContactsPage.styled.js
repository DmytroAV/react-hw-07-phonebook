import { BtnStyled } from 'components/Button/Button.styled';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
  justify-items: center;
  align-items: center;
  row-gap: 15px;
  width: 1080px;
`;

export const BtnAddContact = styled(BtnStyled)`
  display: grid;
  grid-template-columns: 20% 1fr;
  justify-items: center;
  align-items: center;
  justify-self: start;
  width: 170px;
  height: 40px;
`;
