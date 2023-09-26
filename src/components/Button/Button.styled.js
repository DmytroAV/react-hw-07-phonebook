import styled from 'styled-components';

export const BtnStyled = styled.button`
  border: none;
  cursor: pointer;
  width: 130px;
  height: 30px;
  font-weight: 600;
  background: #ff8500;
  color: #f6f8f9;
  border-radius: 3px;
  text-transform: uppercase;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    background: #ea7b00;
    color: #f6f8f9;
  }
`;
