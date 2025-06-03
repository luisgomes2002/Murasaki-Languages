import {
  CloseButton,
  ModalContent,
  ModalOverlay,
} from "../create-lesson-modal/create-lesson-modal-styled";
import UpdateExplanation from "../update-explanation/update-explanation";

interface Props {
  onClose: () => void;
  explanationIdByModal: string;
}

const UpdateExplanationModal = ({ onClose, explanationIdByModal }: Props) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </CloseButton>
        <UpdateExplanation explanationIdByModal={explanationIdByModal} />
      </ModalContent>
    </ModalOverlay>
  );
};

export default UpdateExplanationModal;
