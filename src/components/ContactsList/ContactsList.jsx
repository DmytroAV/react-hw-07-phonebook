import PropTypes from 'prop-types';
import { Message } from '../Message/Message';
import {
  Container,
  Title,
  ContactsUl,
  InputFilterContacts,
} from './ContactsList.styled';
import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';

export const ContactsList = ({ items, value, onChange }) => {
  return (
    <Container>
      <Title>Contacts</Title>
      <InputFilterContacts
        type="text"
        placeholder="Find contacts by First Name"
        name="filter"
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
      {items.length !== 0 ? (
        <ContactsUl>
          {items.map(item => (
            <ContactsListItem key={item.id} {...item} />
          ))}
        </ContactsUl>
      ) : (
        <Message message="There is no such name in your phonebook. Please enter correct contacts name!" />
      )}
    </Container>
  );
};

ContactsList.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
