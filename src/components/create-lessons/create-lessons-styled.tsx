import styled from "styled-components";
import { Button } from "../transparent-header/transparent-header-styled";

export const CreateLessonArea = styled.div`
  background-color: #0a0a0a;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: white;
    font-size: 40px;
    font-weight: 300;
  }

  input {
    width: 40%;
    border-radius: 8px;
    padding: 8px 16px;
    background: #1f1f1f;
    border: 1px solid #333;
    color: #fff;
    margin: 20px 0;

    &::placeholder {
      color: #888;
    }
  }
`;

export const LabelOptions = styled.div`
  display: flex;

  label {
    color: white;
    margin-right: 10px;
  }

  div {
    align-items: center;
    justify-content: center;
    margin: 20px;
  }

  select {
    color: white;
    background-color: #333;
    border-radius: 6px;
    padding: 6px 10px;
    border: none;
    outline: none;
  }

  option {
    background-color: #444;
    color: white;
  }
`;

export const MainButton = styled(Button)`
  background-color: #7a14be;
  padding: 8px;
  width: 250px;
  border-radius: 10px;

  &:hover {
    background-color: #8e2edd;
  }
`;

export const LessonButton = styled(Button)`
  background-color: #7a14be;
  padding: 3px 6px;
  border-radius: 5px;

  &:hover {
    background-color: #8e2edd;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 0 0;
  width: 40%;
`;

export const LinksList = styled.ul`
  color: white;
  width: 37%;

  li a {
    color: #7a14be;
  }
`;

export const Error = styled.span`
  border: 1px solid #e91d1d;
  padding: 10px;
  color: #e91d1d;
  margin: 10px;
  border-radius: 15px;

  i {
    padding-right: 6px;
  }
`;

export const EditorContainer = styled.div`
  border: 1px solid #333;
  border-radius: 4px;
  min-height: 250px;
  width: 40%;
  color: white;
  background-color: #1f1f1f;

  .ProseMirror {
    padding: 10px 25px;
    min-height: 250px;
    outline: none;
  }
`;
