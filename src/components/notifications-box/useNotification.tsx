import { useState, useCallback } from "react";

type NotificationType = "success" | "error";

export const useNotification = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [type, setType] = useState<NotificationType>("success");

  const showNotification = useCallback(
    (msg: string, type: NotificationType = "success", duration = 10000) => {
      setMessage(msg);
      setType(type);
      setTimeout(() => setMessage(null), duration);
    },
    [],
  );

  const hideNotification = () => setMessage(null);

  return {
    message,
    type,
    showNotification,
    hideNotification,
  };
};
