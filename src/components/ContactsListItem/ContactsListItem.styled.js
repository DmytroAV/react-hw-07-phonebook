import styled from 'styled-components';


export const ListContact = styled.li`
  display: grid;
  grid-template-columns: 30% 1fr 10%;
  justify-items: center;
  align-items: center;
  gap: 10px;
  padding: 5px;
  width: 100%;
  background-color: #f8f8f8;
  border: 2px solid #c2c2c2;
  border-radius: 3px;
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.25);
`;

export const Contact = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 15px;
  width: 100%;
`;

export const ImgAvatar = styled.img`
  width: 200px;
  border-radius: 50%;
`;

export const NameContact = styled.h2`
  margin: 0;
  font-size: 18px;
  font-style: italic;
`;

export const JobContact = styled.p`
  margin: 0;
  font-size: 16px;
  font-style: italic;
  border-bottom: 1px solid #a0a4a7
`;


export const Label = styled.div`
  display: grid;
  grid-template-columns: 10% 1fr;
  justify-items: stretch;
  align-items: center;
  width: 100%;
  margin: 0;
  font-size: 16px;
  font-style: italic;
     svg {
      width: 25px;
      height: 25px;
      fill: #ff8500;
    }
`;

export const ContainerBtn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-self: start;
  width: 100%;
`

export const Button = styled.button`
  justify-self: center;
  align-self: center;
  border: none;
  cursor: pointer;
  background-color: #f8f8f8;
  width: 40px;
  height: 40px;
  svg {
      width: 25px;
      height: 25px;
      fill: ${props => props.name === "delete" ? "#ff4747" : "#84898c"};
    }
`;


