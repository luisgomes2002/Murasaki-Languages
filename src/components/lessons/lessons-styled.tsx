import styled from "styled-components";

export const LessonsOptions = styled.div`
  display: flex;
  margin: 10px 0;

  p {
    margin-left: 5px;
    color: white;
  }

  input[type="checkbox"] {
    display: none;
  }

  .custom-checkbox {
    width: 20px;
    height: 20px;
    display: inline-block;
    border: 2px solid white;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
  }

  input[type="checkbox"]:checked + .custom-checkbox {
    background-color: #6f00ff;
    border-color: #6f00ff;
  }
`;
