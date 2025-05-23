import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 5%;
  flex-direction: column;
  min-height: 100vh;
  background-color: #0a0a0a;
`;

export const UserOverview = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Card = styled.div`
  margin: 0 30px;
  display: flex;
  border-radius: 5px;
  padding: 40px;
  align-items: center;

  p {
    color: white;
    font-weight: 600;
  }

  h3 {
    color: white;
    font-weight: 200;
  }

  i {
    /* background-color: #6714d3; */
    font-size: 30px;
    color: white;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  div {
    padding: 0 20px;
    text-align: left;
  }
`;

export const MoreInfo = styled.div`
  display: grid;
  grid-template-columns: 1040px 1fr;
  width: 100%;
`;

export const GraphicArea = styled.div`
  padding: 30px;
  margin: 3%;
  border-radius: 5px;

  h1 {
    color: white;
    text-align: left;
    font-weight: 400;
    padding-bottom: 5%;
  }
`;

export const PieArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 73%;
  align-items: center;
  justify-content: center;
  margin: 7% 0;
  border-radius: 5px;

  h1 {
    color: white;
    text-align: left;
    font-weight: 400;
  }
`;
