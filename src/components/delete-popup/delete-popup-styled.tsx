import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  background: #1f1f1f;
  padding: 2rem;
  width: 90%;
  max-width: 400px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

  h2 {
    color: #fff;
  }

  p {
    color: #fff;
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const Button = styled.button`
  padding: 0.5rem 1.2rem;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
`;

export const ConfirmButton = styled(Button)`
  background-color: #e53935;
  color: white;
`;

export const CancelButton = styled(Button)`
  background-color: #ccc;
  color: #333;
`;
