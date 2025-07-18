import styled from "styled-components";

export const LessonsOptions = styled.div`
  display: flex;
  margin: 10px;
  padding-right: 10px;

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

export const CreateLesson = styled.button`
  color: white;
  background-color: #6f00ff;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  margin-left: 10px;
  cursor: pointer;
`;

export const SelectAndCreateLesson = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
  }
  margin-bottom: 10px;
`;
