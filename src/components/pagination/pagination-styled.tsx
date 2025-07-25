import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 20px;
`;

export const PageButton = styled.button<{ active?: boolean }>`
  padding: 6px 12px;
  background-color: ${({ active }) => (active ? "#333" : "#ddd")};
  color: ${({ active }) => (active ? "#fff" : "#000")};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ active }) => (active ? "#222" : "#bbb")};
  }
`;
