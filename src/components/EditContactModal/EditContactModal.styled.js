import styled from 'styled-components';

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

export const Modal = styled.div`
  display: grid;
  grid-template-rows: 25px 1fr;
  row-gap: 5px;
  padding: 10px;
  background-color: #dadada;
  border-radius: 5px;
`;

export const ButtonClose = styled.button`
  /* display: grid;
  justify-content: center;
  align-items: center; */
  justify-self: end;
  border: none;
  background-color: unset;
  cursor: pointer;
  margin: 0;
  padding: 0;
  /* width: 25px;
  height: 25px;
  border: 2px solid #121212;
  border-radius: 50%; */
`;
