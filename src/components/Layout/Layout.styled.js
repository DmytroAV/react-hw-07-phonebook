import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr 70px;
  grid-template-areas:
  "header"
  "main"
  "footer";
  width: 100%;
  height: 100vh;
  row-gap: 15px;
  padding: 10px;
`;

export const Header = styled.header`
  grid-area: header;
  display: grid;
  grid-template-columns: 30% 1fr 30%;
  justify-items: center;
  align-items: center;
  width: 100%;
  min-height: 64px;
  padding: 5px 10px;
  color: #f6f8f9;
  font-style: italic;
  font-weight: 600;
  font-size: 18px;
  background-color: #f8f8f8;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Main = styled.main`
  grid-area: main;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
`;

export const Footer = styled.footer`
  grid-area: footer;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  background-color: #f8f8f8;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  width: 100%;
  a {
    text-transform: uppercase;
    text-decoration: none;
    color: #84898c;
    &.active{
      color: #ff8500;
    }
  }
`;

export const SvgContainer = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  width: 60px;
  height: 60px;
  padding: 5px;
  border-radius: 50%;
  border: 2px solid #ff8500;
  svg {
    width: 40px;
    height: 40px;
    color: #ff8500;
  }
`;

