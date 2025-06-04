import styled, { css } from "styled-components";

type ContainerProps = {
  type?: "success" | "error";
};

export const NotificationContainer = styled.div<ContainerProps>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: white;
  padding: 16px 24px;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  display: flex;
  align-items: center;
  animation: slideIn 0.3s ease forwards;

  ${({ type }) =>
    type === "error"
      ? css`
          background-color: #e74c3c;
        `
      : css`
          background-color: #2ecc71;
        `}

  @keyframes slideIn {
    from {
      transform: translateY(50%);
      opacity: 0;
    }
    to {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 18px;
  margin-left: 16px;
  cursor: pointer;
`;
