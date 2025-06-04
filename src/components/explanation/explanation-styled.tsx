import styled from "styled-components";

export const ExplanationUpdateArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #0a0a0a;
  min-height: 100vh;

  h1 {
    font-weight: 100;
    color: white;
    padding: 3%;
    font-size: 35px;
  }

  input {
    width: 760px;
    border-radius: 8px;
    padding: 8px 16px;
    background: #1f1f1f;
    border: 1px solid #333;
    color: #fff;
    margin: 10px 0;

    &:focus {
      border-color: #7b61ff;
      outline: none;
    }

    &::placeholder {
      color: #888;
    }
  }
`;

export const ExplanationCardCreate = styled.div`
  background-color: #1f1f1f;
  padding: 20px;
  width: 70%;
  border-radius: 20px;
  margin: 10px;

  h1 {
    font-size: 20px;
    color: #ffffffd1;
    padding: 10px 0;
    font-weight: 600;
  }

  h2 {
    font-size: 20px;
    color: #ffffffd1;
    padding-bottom: 10px;
    font-weight: 400;
  }

  h3 {
    font-size: 15px;
    color: #ffffffd1;
    font-weight: 300;
  }

  p {
    color: #ffffffd1;
  }
`;

export const ExplanationIndex = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    background-color: #5d2991;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    margin: 0 4px;

    i {
      color: white;
      font-size: 15px;
    }
  }
`;
