import { Link } from "react-router-dom";
import styled from "styled-components";

interface NavProps {
  backgroundColor?: string;
  isWhite?: boolean;
}

export const TransparenNav = styled.nav<NavProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ?? "transparent"};
  width: 100%;
  position: absolute;
  height: 10%;
  top: 0;
  z-index: 1;
  padding: 0 5%;
  border-bottom: ${({ isWhite }) => (isWhite ? "1px solid #3c0d7a70" : "none")};

  > a {
    display: flex;
    align-items: center;
    font-size: 35px;
    color: ${({ isWhite }) => (isWhite ? "#3c0d7a" : "white")};
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

  @media screen and (max-width: 1440px) {
  }
  @media screen and (max-width: 1280px) {
  }
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 414px) {
  }
  @media screen and (max-width: 375px) {
  }
`;

interface RightDivProps {
  menuOpen?: boolean;
}

export const RightDiv = styled.div<RightDivProps>`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1440px) {
  }
  @media screen and (max-width: 1280px) {
  }
  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 768px) {
    display: ${({ menuOpen }) => (menuOpen ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: white;
    padding: 20px;
    border-radius: 0 0 10px 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    a,
    button {
      color: black;
      font-weight: 300;
      margin: 10px 0;
      border: none;
    }
  }

  @media screen and (max-width: 414px) {
  }
  @media screen and (max-width: 375px) {
  }
`;

interface SectionProps {
  isWhite?: boolean;
}

export const Section = styled.section<SectionProps>`
  a {
    text-decoration: none;
    color: ${({ isWhite }) => (isWhite ? "#3c0d7a" : "white")};
    cursor: pointer;
    font-size: 20px;
    transition: all 0.2s ease-in;
    margin: 20px;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;

    a {
      color: black;
      font-weight: 300;
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

interface ButtonProps {
  isWhite?: boolean;
}

export const HeaderButtonTransparent = styled(Link)<ButtonProps>`
  background-color: transparent;
  color: ${({ isWhite }) => (isWhite ? "#3c0d7a" : "white")};
  border: 1px solid ${({ isWhite }) => (isWhite ? "#3c0d7a" : "white")};
  border-radius: 5px;
  padding: 8px 25px;
  margin: 10px;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  text-decoration: none;
  font-weight: 300;
`;

export const LogoutButton = styled.button<ButtonProps>`
  background-color: transparent;
  color: ${({ isWhite }) => (isWhite ? "#3c0d7a" : "white")};
  border: 1px solid ${({ isWhite }) => (isWhite ? "#3c0d7a" : "white")};
  border-radius: 5px;
  padding: 8px 25px;
  margin: 10px;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  font-weight: 300;
`;

interface IconProps {
  isWhite?: boolean;
}

export const MenuIcon = styled.i<IconProps>`
  display: none;
  color: ${({ isWhite }) => (isWhite ? "#3c0d7a" : "white")};
  font-size: 28px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
