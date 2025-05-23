import styled from "styled-components";

export const LessonBoxArea = styled.div`
  background-color: #191c1f;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ImgVideoBox = styled.div`
  margin-top: 3%;

  h1 {
    font-size: 30px;
    margin-bottom: 10px;
    font-weight: 600;
    color: white;
  }

  iframe {
    width: 1000px;
    height: 600px;
    border-radius: 10px;
    border: none;
  }

  img {
    width: 1000px;
    height: 600px;
    border-radius: 10px;
  }
`;

export const CompletedButton = styled.section<{ $isCompleted: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $isCompleted }) =>
    $isCompleted ? "#6f00ff" : "white"};
  border: 1px solid #6f00ff;
  border-radius: 5px;
  width: 100px;
  cursor: pointer;
  padding: 5px;
  margin-left: auto;

  p {
    color: ${({ $isCompleted }) => ($isCompleted ? "white" : "#6f00ff")};
    font-size: 12px;
    padding-right: 5px;
  }

  i {
    border: 1px solid
      ${({ $isCompleted }) => ($isCompleted ? "white" : "#6f00ff")};
    border-radius: 50%;
    padding: 3px;
    color: ${({ $isCompleted }) => ($isCompleted ? "white" : "#6f00ff")};
    font-size: 8px;
  }
`;

export const TextSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 3%;

  p {
    padding-top: 2%;
    width: 1000px;
  }
`;

export const Options = styled.div<{ $activeSection: string }>`
  display: flex;
  border-bottom: 1px solid #ffffff90;
  width: 1000px;

  button {
    margin-right: 1%;
    border: none;
    padding: 10px;
    font-size: 18px;
    font-weight: 600;
    background-color: #191c1f;
    cursor: pointer;
    color: white;
    border-bottom: 2px solid transparent;
  }

  button:nth-child(1) {
    border-bottom: ${({ $activeSection }) =>
      $activeSection === "text" ? "2px solid white" : "2px solid transparent"};
  }

  button:nth-child(2) {
    border-bottom: ${({ $activeSection }) =>
      $activeSection === "lesson"
        ? "2px solid white"
        : "2px solid transparent"};
  }
`;
