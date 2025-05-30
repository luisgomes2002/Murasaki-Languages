import { useEffect } from "react";
import CreateLessons from "../create-lessons/create-lessons";
import {
  CloseButton,
  ModalContent,
  ModalOverlay,
} from "./create-lesson-modal-styled";

interface Props {
  onClose: () => void;
}

const CreateLessonModal = ({ onClose }: Props) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </CloseButton>
        <CreateLessons />
      </ModalContent>
    </ModalOverlay>
  );
};

export default CreateLessonModal;
