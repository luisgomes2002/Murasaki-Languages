import styled from "styled-components";
import { Link } from "react-router-dom";

export const LessonCardWrapper = styled(Link)`
  background-color: #191c1f;
  border-radius: 10px;
  margin: 1%;
  width: 370px;
  cursor: pointer;
  text-decoration: none;
`;

export const ImgLessonCard = styled.div`
  display: flex;
  flex-direction: column;

  img {
    border-radius: 10px;
    padding-bottom: 2%;
    width: 100%;
  }
`;

export const TagLessonCard = styled.div`
  display: flex;
  justify-content: center;
  background-color: #3c0d7a;
  width: 25%;
  color: white;
  border-radius: 25px;
  padding: 2px;
  margin-bottom: 2%;
  font-size: 12px;
`;

export const InfoLessonCard = styled.div`
  padding: 1% 3% 3% 3%;

  h1 {
    font-size: 22px;
    font-weight: 600;
    color: white;
    width: 100%;
  }

  h2 {
    padding: 5px 0;
    font-size: 17px;
    font-weight: 300;
    color: #ffffffce;
    font-weight: 400;
  }

  h3 {
    padding: 5px 0;
    font-size: 13px;
    font-weight: 200;
    color: #ffffffa2;
    font-weight: 400;
  }

  p {
    padding: 5px 0;
    width: 100%;
    color: #ffffffd8;
    font-weight: 500;
  }
`;
