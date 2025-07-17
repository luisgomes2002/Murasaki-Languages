import { Link } from "react-router-dom";
import styled from "styled-components";

export const TransparenNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: transparent;
  width: 100%;
  position: absolute;
  height: 10%;
  top: 0;
  z-index: 1;
  padding: 0 5%;

  > a {
    display: flex;
    align-items: center;

    font-size: 35px;
    color: white;
    text-decoration: none;
    font-weight: 500;

    span {
      font-size: 11px;
      color: black;
      background-color: #fff;
      border-radius: 10px;
      margin: 0 5px;
      padding: 0 8px;
    }
  }
`;

export const RightDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const Section = styled.section`
  a {
    text-decoration: none;
    color: white;
    cursor: pointer;
    font-size: 20px;
    transition: all 0.2s ease-in;
    margin: 20px;
    font-weight: 400;

    &:hover {
      color: #6f00ff;
      transition: all 0.2s ease-in;
    }
  }
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 200;
  font-size: 22px;
  margin-right: 10px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

export const HeaderButtonTransparent = styled(Link)`
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  padding: 5px 15px;
  margin: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  text-decoration: none;
  font-size: 22px;
  font-weight: 200;

  /* &:hover {
    background-color: white;
    color: #6f00ff;
  } */
`;

export const LogoutButton = styled(Button)`
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  padding: 5px 15px;
  margin: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  text-decoration: none;
  font-size: 22px;
  font-weight: 200;
`;
