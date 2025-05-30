import styled from "styled-components";

export const StyledEditor = styled.div`
  .ProseMirror {
    padding: 15px;
    border: 1px solid #333;
    border-radius: 8px;
    background-color: #1f1f1f;
    font-size: 16px;
    line-height: 1.5;
    outline: none;
    color: white;
    min-height: 400px;
    max-height: 400px;
    min-width: 760px;
    max-width: 760px;
    overflow-y: auto;
  }

  .ProseMirror:focus {
    border-color: #7b61ff;
    box-shadow: 0 0 0 2px rgba(123, 97, 255, 0.2);
  }
`;
