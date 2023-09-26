import { BtnStyled } from 'components/Button/Button.styled';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  justify-content: center;
  width: 100%;
  position: relative;
`;

export const BtnBackHome = styled(BtnStyled)`
  position: absolute;
  z-index: 3;
`;
