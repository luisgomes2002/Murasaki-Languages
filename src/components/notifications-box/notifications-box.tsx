import { CloseButton, NotificationContainer } from "./notifications-box-styled";

type NotificationProps = {
  message: string;
  onClose: () => void;
  type?: "success" | "error";
};

export const Notification: React.FC<NotificationProps> = ({
  message,
  onClose,
  type = "success",
}) => {
  return (
    <NotificationContainer type={type}>
      {message}
      <CloseButton onClick={onClose}>&times;</CloseButton>
    </NotificationContainer>
  );
};
