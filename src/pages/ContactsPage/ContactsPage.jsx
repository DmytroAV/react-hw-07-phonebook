import { useState } from 'react';
import { useGetContactsQuery } from '../../redux/contactsApi';
import { Outlet, useNavigate } from 'react-router-dom';
import { ContactsList } from '../../components/ContactsList/ContactsList';
import { Message } from '../../components/Message/Message';
import { Loader } from 'components/Loader/Loader';
import { MdAddCircleOutline } from 'react-icons/md';
import { BtnAddContact, Container } from './ContactsPage.styled';
import 'react-toastify/dist/ReactToastify.css';

const ContactsPage = () => {
  const { data, isFetching } = useGetContactsQuery();
  const [filters, setFilters] = useState('');
  const navigate = useNavigate();

  const addFilterContacts = () => {
    const normalFilter = filters.toLowerCase().trim();
    if (data) {
      return data.filter(({ firstName }) =>
        firstName.toLowerCase().includes(normalFilter)
      );
    }
    return;
  };

  const filteredContacts = addFilterContacts();
  return (
    <>
      {isFetching && <Loader />}
      <Container>
        {filteredContacts && (
          <>
            <BtnAddContact onClick={() => navigate('/create')}>
              <MdAddCircleOutline size={30} />
              Add Contact
            </BtnAddContact>
            <ContactsList
              items={filteredContacts}
              onChange={e => setFilters(e.target.value)}
              value={filters}
            />
          </>
        )}
        {filteredContacts === 0 && (
          <Message message="There are no contacts in your phonebook. Please add your first contact!" />
        )}
        <Outlet />
      </Container>
    </>
  );
};

export default ContactsPage;
