import { Link } from "react-router-dom";
import styled from "styled-components";

export const LanguagesCardArea = styled(Link)<{
  image: string;
  isActive: boolean;
}>`
  text-decoration: none;
  width: 300px;
  height: 450px;
  margin: 15px;
  background-image: ${({ image }) =>
    `linear-gradient(to bottom, rgba(0,0,0,0.253) 0%, #000000 700%), url(${image})`};
  background-size: cover;
  background-position: center;
  transform: scale(1);
  transition: all 0.3s ease-in;
  border-radius: 5px;
  filter: ${({ isActive }) => (isActive ? "none" : "grayscale(100%)")};
  pointer-events: ${({ isActive }) => (isActive ? "auto" : "none")};
  cursor: ${({ isActive }) => (isActive ? "pointer" : "not-allowed")};

  h1 {
    padding-top: 15%;
    color: white;
    font-weight: 300;
  }
`;
