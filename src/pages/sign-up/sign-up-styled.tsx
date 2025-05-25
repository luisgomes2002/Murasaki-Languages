import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BoxSignUp = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
`;

export const ImageSignUp = styled.div`
  background-image: url("/src/assets/images/background/teste.png");
  color: white;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const StyledForm = styled.form`
  padding: 5% 10%;
  width: 800px;
  display: flex;
  flex-direction: column;
`;

export const StyledSelect = styled.select`
  width: 400px;
  height: 35px;
  margin: 10px 0;
  padding: 10px;
  font-size: 15px;
  border: 1px solid rgba(0, 0, 0, 0.233);
  border-radius: 5px;
  background-color: white;
`;

export const StyledInput = styled.input`
  width: 400px;
  height: 35px;
  margin: 10px 0;
  padding: 10px;
  font-size: 15px;
  border: 1px solid rgba(0, 0, 0, 0.233);
  border-radius: 5px;
`;

export const Title = styled.h1`
  font-size: 25px;
  font-weight: 500;
  margin: 20px 0;
  color: #0a0520;
`;

export const Label = styled.h2`
  font-size: 18px;
  font-weight: 400;
`;

export const SubmitButton = styled.button`
  border: none;
  background-color: #0a0520;
  color: white;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  cursor: pointer;
  font-weight: 400;
  font-size: 17px;
`;

export const StyledLink = styled.a`
  color: #431185;
  text-decoration: none;
`;

export const Text = styled.p`
  font-weight: 300;
  font-size: 12px;
  width: 400px;
  padding: 0 0 10px 0;
`;

export const ErrorMessage = styled.span`
  padding-bottom: 5px;
  color: red;
  font-size: 14px;
  padding-left: 5px;
`;

export const LoginText = styled.p`
  font-weight: 500;
  font-size: 15px;
`;

export const TermsText = styled.p`
  font-weight: 300;
  font-size: 12px;
  margin: 10px 0;
`;
