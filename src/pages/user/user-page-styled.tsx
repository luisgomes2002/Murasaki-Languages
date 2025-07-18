import styled from "styled-components";

export const UserInfoArea = styled.div`
  margin: 6% 7%;
`;

export const UserUpdateArea = styled.div`
  margin-top: 5%;
  display: grid;
  grid-template-columns: 10% 1fr;
`;

export const UpdateAreas = styled.div`
  display: flex;
  flex-direction: column;

  button {
    height: 50px;
    width: 200px;
    border: none;
    cursor: pointer;
    background-color: #0a0520;
    color: #fff;
    font-size: 16px;
    margin-bottom: 5px;
  }
`;

export const SubscriptionUpdate = styled.div`
  display: flex;
  margin-top: 2%;

  button {
    margin-right: 10px;
    background-color: #0a0520;
    padding: 8px;
    width: 200px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    color: #fff;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0a0520;
    padding: 8px;
    width: 200px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 13px;
    text-decoration: none;
  }
`;
