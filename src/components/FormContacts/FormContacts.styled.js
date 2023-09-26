import { BtnStyled } from 'components/Button/Button.styled.js';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  justify-content: stretch;
  row-gap: 20px;
  padding: 15px;
  /* width: 100%; */
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
  padding-left: 40px;
  padding-bottom: 10px;
  color: #ff8500;
`;

export const ContainerForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-template-areas:
  "firstName avatar"
  "lastName avatar"
  "job_title avatar"
  "user_country user_region"
  "code_country address_street"
  "email phone"
  "button button";
  justify-content: center;
  max-width: 700px;
  padding: 20px 12px 10px 20px;
  row-gap: 30px;
`;

export const LabelInput = styled.label`
  display: grid;
  grid-area: ${props => props.htmlFor};
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 15px;
  font-weight: bold;
  font-style: italic;
  position: relative;
  color: #ff8500;
    select {
      width: 250px;
      height: 30px;
    }
    .PhoneInput{
      width: 250px;
      .PhoneInputInput {
        width: 100%;
      }
      .PhoneInputCountrySelect {
          width: 40px;
      }
    }
`;

export const ImgAvatar = styled.img`
  grid-area: avatar;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 1px solid;
  justify-self: center;
  align-self: center;
`;

export const InputField = styled.input`
  border: 1px solid #c2c2c2;
  box-shadow: 1px 1px 4px #ebebeb;
  border-radius: 3px;
  padding: 7px;
  outline: none;
  width: 250px;
  height: 30px;
  &:focus {
    border: ${props => props.$mode && '1px solid red'};
  }
  text-transform: ${props => props.$capitalize && 'capitalize'};
`;

export const BtnAddContacts = styled(BtnStyled)`
  grid-area: button;
  justify-self: end;
`;
