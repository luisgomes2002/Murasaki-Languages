import {
  ModalContent,
  ModalOverlay,
} from "../create-lesson-modal/create-lesson-modal-styled";
import { CloseButton } from "../notifications-box/notifications-box-styled";
import UpdateWorksheet from "../update-worksheets/update-worksheet";

interface Props {
  onClose: () => void;
  worksheetIdByModal: string;
}

const UpdateWorksheetsModal = ({ onClose, worksheetIdByModal }: Props) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </CloseButton>
        <UpdateWorksheet worksheetsIdByModal={worksheetIdByModal} />
      </ModalContent>
    </ModalOverlay>
  );
};

export default UpdateWorksheetsModal;
