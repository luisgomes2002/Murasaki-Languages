import { Link } from "react-router-dom";
import { signinService } from "../../services/user.service";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema } from "../../schemas/sign-in-schema";
import { useState } from "react";
import {
  ErrorMessage,
  FormContainer,
  StyledForm,
  StyledInput,
  SubmitButton,
  Title,
} from "../sign-up/sign-up-styled";
import { Label } from "recharts";
import { BoxSignIn, ImageSignIn } from "./sign-in-stylex";

interface loginProps {
  email: string;
  password: string;
}

const SignIn = () => {
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignInSchema),
  });

  const login = async (data: loginProps) => {
    try {
      setLoading(true);
      const response = await signinService(data);
      Cookies.set("token", response.data.token, { expires: 5 });
      window.location.href = "/";
    } catch (error: any) {
      setError(error.response.data.Message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <FormContainer>
      <BoxSignIn>
        <ImageSignIn />
        <StyledForm onSubmit={handleSubmit(login)}>
          <Title>Entrar no Murasaki</Title>

          <Label>Email</Label>
          <StyledInput
            {...register("email")}
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setError("");
              register("email").onChange(e);
            }}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <StyledInput
            {...register("password")}
            type="password"
            placeholder="Senha"
            onChange={(e) => {
              setError("");
              register("password").onChange(e);
            }}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
          <ErrorMessage>{error}</ErrorMessage>
          <SubmitButton>
            {loading ? <i className="fa-solid fa-c fa-spin" /> : "Entrar"}
          </SubmitButton>
          <SubmitButton>
            Entrar com <i className="fa-brands fa-google"></i>
          </SubmitButton>
          <div className="login">
            <p>
              Não tem uma contar? <Link to="/sign-up">Criar uma conta</Link>
            </p>
          </div>
        </StyledForm>
      </BoxSignIn>
    </FormContainer>
  );
};

export default SignIn;
