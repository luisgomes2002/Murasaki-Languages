import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2% 4%;
  background-color: #0a0520;
  /* background-color: #492b7a; */

  a {
    color: white;
    text-decoration: none;
    font-size: 20px;
    margin: 0 5px;
  }

  p {
    color: white;
  }

  i {
    color: white;
    margin: 0 3px;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.2s ease-in;
  }

  i:hover {
    color: #6f00ff;
    transition: all 0.2s ease-in;
  }
`;

export const IconsDiv = styled.div`
  margin: 0 5px;

  a {
    margin: 0;
  }
`;
