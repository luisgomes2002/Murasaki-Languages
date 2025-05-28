import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px;
  flex-wrap: wrap;
`;

export const MenuButton = styled.button<{ active?: boolean }>`
  background-color: ${({ active }) => (active ? "#333" : "#fff")};
  color: ${({ active }) => (active ? "#fff" : "#333")};
  border: 1px solid #ccc;
  padding: 6px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ active }) => (active ? "#222" : "#f0f0f0")};
  }

  i {
    pointer-events: none;
  }
`;
