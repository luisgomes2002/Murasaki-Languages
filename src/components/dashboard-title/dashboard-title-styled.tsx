import styled from "styled-components";

export const TitleSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin-left: 10px;

  .title {
    font-size: 24px;
    font-weight: 500;
  }

  input {
    border-radius: 8px;
    padding: 8px 16px;
    width: 250px;
    background: #1f1f1f;
    border: 1px solid #333;
    color: #fff;

    &::placeholder {
      color: #888;
    }
  }
`;
