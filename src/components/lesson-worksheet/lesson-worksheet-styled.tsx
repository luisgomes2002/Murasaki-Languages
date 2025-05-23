import styled from "styled-components";

export const WorksheetBox = styled.div`
  padding-top: 2%;
  width: 1000px;

  h2 {
    font-size: 20px;
    font-weight: 600;
    padding: 10px 0;
  }

  section {
    display: flex;
    flex-direction: column;

    button {
      display: flex;
      align-items: center;
      background-color: white;
      cursor: pointer;
      margin: 10px 0;
      padding: 1%;
      border-radius: 15px;
      border: none;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: white;
        padding: 10px;
        border-radius: 50%;
        width: 30px;
        height: 30px;

        p {
          font-size: 15px;
        }
      }

      h4 {
        padding-left: 45%;
        font-size: 20px;
        font-weight: 400;
      }
    }

    button:hover {
      background-color: #6f00ff;
      transition: all 0.1s ease-in;

      h4 {
        color: white;
      }
    }
  }
`;

export const QuestionFeedback = styled.span`
  margin: 50px;

  p {
    color: red;
  }
`;

export const AnkiBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ffffff90;

  h1 {
    font-size: 14px;
    color: white;
    font-weight: 200;
  }

  i {
    padding: 0 10px;
    color: white;
    font-size: 25px;
  }

  div {
    display: flex;
    align-items: center;
  }

  a {
    text-decoration: none;
  }

  button {
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
