import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Content = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const MessageBox = styled.div`
  text-align: center;
  max-width: 400px;
  padding: 2rem;
  border-radius: 12px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const Icon = styled.i`
  font-size: 3rem;
  color: #0a0520;
  margin-bottom: 1rem;
`;

export const Heading = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
`;

export const Paragraph = styled.p`
  margin-bottom: 1.5rem;
  color: #555;
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #0a0520;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background-color: #100833;
  }
`;
