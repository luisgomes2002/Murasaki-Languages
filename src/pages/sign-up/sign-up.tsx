import { Link } from "react-router-dom";
import { signupService } from "../../services/user.service";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema } from "../../schemas/sign-up-schema";
import {
  BoxSignUp,
  ErrorMessage,
  FormContainer,
  ImageSignUp,
  Label,
  LoginText,
  StyledForm,
  StyledInput,
  StyledSelect,
  SubmitButton,
  TermsText,
  Text,
  Title,
} from "./sign-up-styled";
import { SignUpProps } from "../../util/interfaces/auth-interface";

const SignUp = () => {
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignUpSchema),
  });

  const CreateAccount = async (data: SignUpProps) => {
    try {
      setLoading(true);
      await signupService(data);
      window.location.href = "/email";
    } catch (error: any) {
      setMessage(error.response.data.Message);
      setError(error.response.data.Error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer>
      <BoxSignUp>
        <ImageSignUp />
        <StyledForm onSubmit={handleSubmit(CreateAccount)}>
          <Title>Inscreva-se no Murasaki</Title>

          <Label>Nome</Label>
          <StyledInput {...register("name")} type="text" placeholder="Nome" />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <Label>Username</Label>
          <StyledInput
            {...register("username")}
            type="text"
            placeholder="Username"
          />
          <ErrorMessage>{errors.username?.message}</ErrorMessage>

          <Label>Email</Label>
          <StyledInput
            {...register("email")}
            type="email"
            placeholder="Email"
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Gênero</Label>
          <StyledSelect {...register("gender")}>
            <option value="">Selecione</option>
            <option value="MALE">Masculino</option>
            <option value="FEMALE">Feminino</option>
            <option value="OTHER">Outro</option>
            <option value="NONE">Não informar</option>
          </StyledSelect>
          <ErrorMessage>{errors.gender?.message}</ErrorMessage>

          <Label>Data de nascimento</Label>
          <StyledInput {...register("birth")} type="date" />
          <ErrorMessage>{errors.birth?.message}</ErrorMessage>

          <Label>Senha</Label>
          <StyledInput
            {...register("password")}
            type="password"
            placeholder="Senha"
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Text>
            A senha deve ter pelo menos 8 caracteres, incluindo um número e uma
            letra minúscula.
          </Text>

          <Label>Confirmar senha</Label>
          <StyledInput
            {...register("confirmPassword")}
            type="password"
            placeholder="Confirmar senha"
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <ErrorMessage>{error}</ErrorMessage>
          <ErrorMessage>{message}</ErrorMessage>

          <SubmitButton type="submit">
            {loading ? <i className="fa-solid fa-c fa-spin" /> : "Criar"}
          </SubmitButton>

          <div className="login">
            <LoginText>
              Já tem uma conta? <Link to="/sign-in">Entrar</Link>
            </LoginText>
          </div>

          <TermsText>
            Ao criar uma conta, você concorda com os Termos de Serviço. Para
            mais informações sobre as práticas de privacidade da Murasaki
            Languages, consulte a Política de Privacidade. Ocasionalmente,
            enviaremos e-mails relacionados à sua conta.
          </TermsText>
        </StyledForm>
      </BoxSignUp>
    </FormContainer>
  );
};

export default SignUp;
