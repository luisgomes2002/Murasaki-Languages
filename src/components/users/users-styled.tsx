import styled from "styled-components";

export const Table = styled.div`
  padding: 20px;
  background-color: #0a0a0a;
  min-height: 100vh;
  color: #fff;
`;

export const InfoTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #333;

    a {
      color: white;
      text-decoration: none;

      &:hover {
        color: #333;
      }
    }
  }

  th {
    background-color: #111;
    font-weight: 600;
  }

  tr:hover {
    background-color: #0a0520;
  }
`;

const ButtonBase = styled.button`
  margin-right: 5px;
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  color: #fff;
`;

export const EditButton = styled(ButtonBase)`
  background-color: #444;
`;

export const DeleteButton = styled(ButtonBase)`
  background-color: #a00;
`;
