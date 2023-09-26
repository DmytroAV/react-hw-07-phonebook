import { useNavigate } from 'react-router-dom';
import {
  useCreateContactMutation,
  useGetContactsQuery,
} from 'redux/contactsApi';
import FormContacts from 'components/FormContacts/FormContacts';
import { ButtonGoBack, Container } from './CreateContactPage.styled';
import { MdKeyboardBackspace } from 'react-icons/md';
import { toast } from 'react-toastify';

const notifyOptions = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

const initialValues = {
  firstName: '',
  lastName: '',
  job_title: '',
  code_country: '',
  address_street: '',
  user_country: '',
  user_region: '',
  email: '',
  phone: '',
};

const CreateContactPage = () => {
  const navigate = useNavigate();
  const [createContact] = useCreateContactMutation();
  const { data } = useGetContactsQuery();

  const addContact = ({
    firstName,
    lastName,
    job_title,
    code_country,
    address_street,
    user_country,
    user_region,
    email,
    phone,
  }) => {
    const normalName = firstName.toLowerCase();
    const checkName = data.some(
      ({ firstName }) => firstName.toLowerCase() === normalName
    );
    if (checkName) {
      toast.error(`${firstName} is already in your phone book`, notifyOptions);
      return;
    }

    const newContact = {
      firstName,
      lastName,
      job_title,
      code_country,
      address_street,
      user_country,
      user_region,
      email,
      phone,
    };
    createContact(newContact);
    toast.success(
      `Contact ${firstName} ${lastName} has been added to your phone book`,
      notifyOptions
    );
  };

  return (
    <Container>
      <ButtonGoBack onClick={() => navigate('/contacts')}>
        <MdKeyboardBackspace size={30} />
        go back
      </ButtonGoBack>
      <FormContacts
        initialValues={initialValues}
        onSubmit={addContact}
        title="Create Contact"
        textBtn="submit"
      />
    </Container>
  );
};

export default CreateContactPage;
