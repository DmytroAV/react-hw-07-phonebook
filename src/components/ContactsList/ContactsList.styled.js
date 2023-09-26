import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 50px 30px 1fr;
  row-gap: 20px;
  padding: 10px;
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  border: 2px solid #c2c2c2;
  border-radius: 3px;
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.h2`
  font-weight: bold;
  font-style: italic;
  border-bottom: 2px solid #ddd;
  margin: 20px 0 0;
  font-size: 22px;
  padding: 0 0 10px 40px;
`;

export const ContactsUl = styled.ul`
  display: grid;
  justify-items: center;
  width: 100%;
  padding: 0 30px;
  row-gap: 20px;
  list-style: none;
`;

export const InputFilterContacts = styled.input`
  width: 300px;
  border: 1px solid #c2c2c2;
  box-shadow: 1px 1px 4px #ebebeb;
  border-radius: 3px;
  padding: 5px;
  outline: none;
  margin: 0 0 0 30px;
    &:focus {
      border: 1px solid #0c0;
    }
`;
