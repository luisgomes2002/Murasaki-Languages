import styled from "styled-components";
import { Button } from "../../components/transparent-header/transparent-header-styled";

export const CreateLessonArea = styled.div`
  padding: 2% 0;
  background-color: #0a0a0a;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: white;
    font-size: 40px;
    font-weight: 300;
  }

  input {
    width: 760px;
    border-radius: 8px;
    padding: 8px 16px;
    background: #1f1f1f;
    border: 1px solid #333;
    color: #fff;
    margin: 20px 0;

    &:focus {
      border-color: #7b61ff;
      outline: none;
    }

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
  width: 760px;
`;

export const LinksList = styled.ul`
  color: white;
  width: 37%;

  li a {
    color: #7a14be;
  }
`;

export const Error = styled.span`
  border: 1px solid #a32525;
  padding: 10px;
  color: #a32525;
  margin: 10px;
  border-radius: 15px;

  i {
    padding-right: 6px;
  }
`;

export const EditorContainer = styled.div`
  .ProseMirror {
    padding: 15px;
    border: 1px solid #333;
    border-radius: 8px;
    background-color: #1f1f1f;
    font-size: 16px;
    line-height: 1.5;
    outline: none;
    color: white;
    min-height: 300px;
    max-height: 300px;
    min-width: 760px;
    max-width: 760px;
    overflow-y: auto;
  }

  .ProseMirror:focus {
    border-color: #7b61ff;
    box-shadow: 0 0 0 2px rgba(123, 97, 255, 0.2);
  }
`;
