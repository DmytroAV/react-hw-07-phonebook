import {
  useGetContactByIdQuery,
  useUpdateContactMutation,
} from 'redux/contactsApi';
import { useNavigate, useParams } from 'react-router-dom';
import FormContacts from 'components/FormContacts/FormContacts';
import { ButtonClose, Overlay, Modal } from './EditContactModal.styled';
import { MdClose } from 'react-icons/md';
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

const EditContactModal = () => {
  const { contactId } = useParams();
  const navigate = useNavigate();
  const { data: contact } = useGetContactByIdQuery(contactId);
  const [updateContact] = useUpdateContactMutation();
  const closeModal = () => navigate('/contacts');

  const handleUpdateContact = async fields => {
    try {
      await updateContact({ id: contactId, ...fields });
      closeModal();
      toast.success(
        `Contact ${contact.firstName} ${contact.lastName} has updated your phone book`,
        notifyOptions
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Overlay>
      {contact && (
        <Modal>
          <ButtonClose type="button" onClick={closeModal}>
            <MdClose size={25} />
          </ButtonClose>
          <FormContacts
            initialValues={contact}
            onSubmit={handleUpdateContact}
            title="Update Contact"
            textBtn="update"
          />
        </Modal>
      )}
    </Overlay>
  );
};

export default EditContactModal;
