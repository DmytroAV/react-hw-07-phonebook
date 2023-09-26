import { useNavigate } from 'react-router';
import NotFound from '../../components/Images/NotFound_404.jpg';
import { BtnBackHome, Container } from './NotFoundPage.styled';

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <img src={NotFound} alt="not found" />
      <BtnBackHome type="button" onClick={() => navigate('/')}>
        back to home
      </BtnBackHome>
    </Container>
  );
};
export default NotFoundPage;
