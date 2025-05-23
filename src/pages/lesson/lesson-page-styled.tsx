import styled from "styled-components";

export const LessonsBackground = styled.div`
  width: 100%;
  height: 50vh;
  background-image: url("/src/assets/images/background/sakura.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const LessonsArea = styled.div`
  display: flex;
  background-color: #191c1f;
  margin: 0;
`;

export const SideBar = styled.div`
  margin: 2%;

  input {
    width: 300px;
    margin: 10% 0;
    height: 40px;
    border: none;
    border-radius: 5px;
    padding-left: 5%;
    background-color: #191c1f;
    color: white;
  }

  h1 {
    font-size: 30px;
    font-weight: 600;
    color: #3c0d7a;
  }

  section {
    padding: 5%;
    border-radius: 5px;
    background-color: #191c1f;
    margin-bottom: 10px;

    h1 {
      font-size: 18px;
      font-weight: 600;
      color: white;
      margin-left: 7px;
    }
  }
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2%;

  p {
    margin-left: 5px;
    color: white;
  }

  input[type="checkbox"] {
    display: none;
  }

  .custom-checkbox {
    width: 20px;
    height: 20px;
    display: inline-block;
    border: 2px solid white;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
  }

  input[type="checkbox"]:checked + .custom-checkbox {
    background-color: #6f00ff;
    border-color: #6f00ff;
  }
`;

export const Lessons = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const Text = styled.div`
  text-align: center;

  h1 {
    margin: 4% 1% 1% 1%;
    font-size: 40px;
    font-weight: 600;
    color: white;
    width: 80%;
    font-weight: 300;
  }

  p {
    margin: 1%;
    font-size: 20px;
    font-weight: 600;
    color: white;
    width: 80%;
    font-weight: 300;
    padding-bottom: 30px;
  }
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 80%;
`;
