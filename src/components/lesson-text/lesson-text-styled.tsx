import styled from "styled-components";

export const ExplanationsBox = styled.div`
  margin-top: 5%;
  width: 1000px;

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
    padding: 7px 0;
    width: 1000px;
    color: white;
  }
`;

export const LessonTextDecoration = styled.div`
  p {
    padding: 0 0 10px 0;
    width: 1000px;
    color: white;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ffffff90;
  padding-top: 20px;
  margin-top: 50px;

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
