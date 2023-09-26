import styled from 'styled-components';

export const ContainerMessage = styled.div`
  width: 100%;
`

export const ErrorText = styled.p`
  position: absolute;
  z-index: 5;
  color: red;
  font-size: 14px;
  font-style: italic;
  grid-column: span 2;
  justify-self: center;
  font-weight: 400;
  margin: 0;
  top: 50px;
`;
