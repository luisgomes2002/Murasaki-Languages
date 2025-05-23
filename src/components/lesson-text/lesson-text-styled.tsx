import styled from "styled-components";

export const ExplanationsBox = styled.div`
  margin-top: 5%;

  h1 {
    font-size: 18px;
    font-weight: 600;
    padding: 10px 0;
    color: white;
  }

  h2 {
    font-size: 18px;
    font-weight: 500;
    padding: 10px 0;
    color: white;
  }

  p {
    padding: 30px 0;
    width: 1000px;
    color: white;
  }
`;

export const LessonTextDecoration = styled.div`
  p {
    padding: 0 0 30px 0;
    margin: 0 0 30px 0;
    width: 1000px;
    border-bottom: 1px solid #ffffff90;
    color: white;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    display: flex;
    align-items: center;
    background-color: #6f00ff;
    padding: 3px 20px;
    border-radius: 10px;
    cursor: pointer;

    i {
      color: white;
    }
  }

  h1 {
    font-size: 20px;
    font-weight: 500;
  }
`;
