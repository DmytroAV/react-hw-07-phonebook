// import { ErrorMessage } from 'formik';
import { ContainerMessage, ErrorText } from './FormError.styled';

export function FormError({ message }) {
  return (
    <ContainerMessage>
      <ErrorText>{message}</ErrorText>
    </ContainerMessage>
  );
  // <Message name={name} render={message => <ErrorText>{message}</ErrorText>} />;
}
