// components/modals/ConfirmationModal.tsx
import React from "react";
import {
  ButtonGroup,
  CancelButton,
  ConfirmButton,
  ModalContainer,
  Overlay,
} from "./delete-popup-styled";

interface ConfirmationModalProps {
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
}

const DeletePopup: React.FC<ConfirmationModalProps> = ({
  title,
  description,
  onConfirm,
  onCancel,
  confirmText = "Confirmar",
  cancelText = "Cancelar",
}) => {
  return (
    <Overlay>
      <ModalContainer>
        <h2>{title}</h2>
        <p>{description}</p>
        <ButtonGroup>
          <ConfirmButton onClick={onConfirm}>{confirmText}</ConfirmButton>
          <CancelButton onClick={onCancel}>{cancelText}</CancelButton>
        </ButtonGroup>
      </ModalContainer>
    </Overlay>
  );
};

export default DeletePopup;
