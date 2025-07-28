import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.div`
  width: 100%;
  background-image: url("/src/assets/images/background/background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
`;

export const HomeTitle = styled.div`
  padding: 25% 0 0 5%;
  margin-bottom: 5%;

  h1 {
    color: white;
    font-size: 150px;
    text-shadow: 1px 1px 2px black;
  }

  p {
    color: white;
    font-size: 20px;
    width: 40%;
    text-shadow: 2px 2px 2px black;
  }

  i {
    font-size: 20px;
    margin-left: 10%;
  }

  @media screen and (max-width: 1440px) {
    padding: 40% 5% 0 5%;

    h1 {
      font-size: 100px;
    }

    p {
      font-size: 18px;
      width: 50%;
    }

    i {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 1280px) {
    padding: 150% 5% 0 5%;

    h1 {
      font-size: 80px;
    }

    p {
      font-size: 18px;
      width: 60%;
    }

    i {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 150% 5% 0 5%;

    h1 {
      font-size: 60px;
    }

    p {
      font-size: 16px;
      width: 70%;
    }

    i {
      font-size: 15px;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 150% 5% 0 5%;

    h1 {
      font-size: 40px;
    }

    p {
      font-size: 14px;
      width: 90%;
    }

    i {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 414px) {
    padding: 150% 5% 0 5%;

    h1 {
      font-size: 35px;
    }

    p {
      font-size: 13px;
      width: 95%;
    }

    i {
      font-size: 13px;
    }
  }

  @media screen and (max-width: 375px) {
    padding: 150% 5% 0 5%;

    h1 {
      font-size: 30px;
    }

    p {
      font-size: 12px;
      width: 100%;
    }

    i {
      font-size: 12px;
    }
  }
`;

export const ButtonHome = styled(Link)`
  display: flex;
  color: black;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 7px;
  background-color: white;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  margin: 10px 0;
  cursor: pointer;
  text-decoration: none;
  width: 21%;

  @media screen and (max-width: 1440px) {
    width: 40%;
    font-size: 18px;
  }

  @media screen and (max-width: 1024px) {
    width: 60%;
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
    font-size: 14px;
  }

  @media screen and (max-width: 414px) {
    width: 100%;
    font-size: 13px;
  }
`;

export const Updates = styled.div`
  background-color: #f5f5f5;
  padding: 5%;
  text-align: center;

  h2 {
    font-size: 36px;
    color: #3a1f78;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 16px;
    color: #333;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      font-size: 20px;
      margin-bottom: 15px;
      color: #333;
      background-color: white;
      padding: 12px 20px;
      border-radius: 10px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      text-align: left;
      max-width: 900px;
      margin-inline: auto;
    }
  }
`;

export const Cards = styled.div`
  background-color: #000000;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 2%;

  @media screen and (max-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 1024px) {
    display: flex;
  }
`;

export const About = styled.div`
  background-color: #0a0520;
  padding: 5% 10%;
  display: grid;
  grid-template-columns: 30% 1fr;
  align-items: center;

  img {
    border-radius: 50%;
    width: 200px;
  }

  p {
    color: white;
    font-size: 20px;
    font-weight: 500;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;

    img {
      margin: 0 auto 20px;
    }
  }
`;

export const Advantages = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  padding: 5%;
  gap: 30px;

  img {
    width: 600px;
    border-radius: 15px;
    max-width: 100%;
    margin: 0 auto;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 30px;
      font-weight: 500;
    }

    p {
      margin-bottom: 5%;
      font-size: 18px;
      font-weight: 200;
    }
  }

  @media screen and (max-width: 1440px) {
    section h1 {
      font-size: 26px;
    }

    section p {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;

    section {
      text-align: center;
    }
  }
`;
