import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background-color: #0a0a0a;
  width: 100%;
  max-width: 70%;
  max-height: 95vh;
  overflow-y: auto;
  padding: 10px;
  border-radius: 12px;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 15px;
  top: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: white;
`;
