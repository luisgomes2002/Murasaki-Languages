import styled from "styled-components";

export const CardCategory = styled.div<{ image: string }>`
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

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardBtns = styled.div`
  height: 100%;
  padding: 10%;
  text-align: center;
  cursor: pointer;

  a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-decoration: none;
    width: 100%;
    height: 100%;
  }
`;

export const SpanCard = styled.span`
  color: white;

  h3 {
    margin-top: 40px;
    font-size: 30px;
    font-weight: 500;
  }
`;

export const SpanBtns = styled.span`
  background-color: #000000;
  color: white;
  padding: 8%;
  border-radius: 5px;
  visibility: hidden;
  transition: 0.2s ease-in;

  ${CardBtns}:hover & {
    transition: 0.3s ease-in;
    visibility: visible;
  }
`;
