import { Suspense } from 'react';
import { GlobalStyle } from '../GlobalStyle';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import { ToastContainer } from 'react-toastify';
import { NavLink, Outlet } from 'react-router-dom';
import {
  Container,
  Footer,
  Header,
  Main,
  Nav,
  SvgContainer,
} from './Layout.styled';
import { MdOutlineConnectWithoutContact } from 'react-icons/md';
import { Loader } from 'components/Loader/Loader';
import Copyright from 'components/Copyright/Copyright';

const Layout = () => {
  return (
    <StyleSheetManager
      shouldForwardProp={isPropValid}
      disableVendorPrefixes={false}
    >
      <Container>
        <Header>
          <SvgContainer>
            <MdOutlineConnectWithoutContact width="150px" />
          </SvgContainer>
          <Nav>
            <NavLink to="/contacts">Contacts</NavLink>
            <NavLink to="/create">Create</NavLink>
          </Nav>
        </Header>
        <Main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Main>
        <Footer>
          <Copyright />
        </Footer>
        <GlobalStyle />
        <ToastContainer />
      </Container>
    </StyleSheetManager>
  );
};

export default Layout;
