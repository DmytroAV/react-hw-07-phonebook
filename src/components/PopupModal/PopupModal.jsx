import {
  CancelBtn,
  ConfirmBtn,
  Contents,
  Overlay,
  Title,
} from './PopupModal.styled';

export const PopupModal = ({ handleDeleteTrue, handleDeleteFalse }) => {
  return (
    <Overlay>
      <Contents>
        <Title>Do you really want to delete the contact?</Title>
        <ConfirmBtn onClick={handleDeleteTrue} type="button">
          Confirm
        </ConfirmBtn>
        <CancelBtn onClick={handleDeleteFalse} type="button">
          Cancel
        </CancelBtn>
      </Contents>
    </Overlay>
  );
};
