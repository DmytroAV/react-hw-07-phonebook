import { useDeleteContactMutation } from 'redux/contactsApi';
import PropTypes from 'prop-types';
import {
  MdLocalPhone,
  MdMail,
  MdOutlineCreate,
  MdOutlineDeleteForever,
  MdRoom,
} from 'react-icons/md';
import {
  ListContact,
  Contact,
  NameContact,
  Button,
  ImgAvatar,
  JobContact,
  ContainerBtn,
  Label,
} from './ContactsListItem.styled';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { PopupModal } from 'components/PopupModal/PopupModal';
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

export const ContactsListItem = ({
  id,
  avatar,
  firstName,
  lastName,
  email,
  code_country,
  user_country,
  user_region,
  address_street,
  job_title,
  phone,
}) => {
  const [deleteContacts] = useDeleteContactMutation();
  const navigate = useNavigate();
  const [popup, setPopup] = useState({
    show: false,
    id: null,
  });

  const handleDeleteContact = id => {
    setPopup({
      show: true,
      id,
    });
  };

  const handleDeleteTrue = () => {
    if (popup.show && popup.id) {
      deleteContacts(id);
      toast.success(
        `Contact ${firstName} ${lastName} has been removed from your phone book`,
        notifyOptions
      );
      setPopup({
        show: false,
        id: null,
      });
    }
  };

  const handleDeleteFalse = () => {
    setPopup({
      show: false,
      id: null,
    });
  };

  return (
    <>
      <ListContact key={id}>
        <ImgAvatar src={avatar} alt="avatar" width={50} />
        <Contact>
          <NameContact>
            {firstName} {lastName}
          </NameContact>
          <JobContact>{job_title}</JobContact>
          <Label>
            <MdLocalPhone />
            {phone}
          </Label>
          <Label>
            <MdMail />
            {email}
          </Label>
          <Label>
            <MdRoom />
            <>
              {code_country}, {address_street}, {user_region}, {user_country}
            </>
          </Label>
        </Contact>
        <ContainerBtn>
          <Button
            name="edit"
            type="button"
            onClick={() => navigate(`/contacts/edit/${id}`)}
          >
            <MdOutlineCreate />
          </Button>
          <Button name="delete" type="button" onClick={handleDeleteContact}>
            <MdOutlineDeleteForever />
          </Button>
          {popup.show && (
            <PopupModal
              handleDeleteTrue={handleDeleteTrue}
              handleDeleteFalse={handleDeleteFalse}
            />
          )}
        </ContainerBtn>
      </ListContact>
    </>
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  code_country: PropTypes.string.isRequired,
  user_country: PropTypes.string.isRequired,
  user_region: PropTypes.string.isRequired,
  address_street: PropTypes.string.isRequired,
  job_title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
