import { Label } from "recharts";
import {
  ErrorMessage,
  StyledInput,
  SubmitButton,
  Text,
} from "../sign-up/sign-up-styled";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PasswordSchema } from "../../schemas/update-password-schema";
import { useState } from "react";
import {
  Container,
  Content,
  MessageBox,
  StyledLink,
} from "../check-email/check-email-styled";
import Footer from "../../components/footer/footer";
import { useNotification } from "../../components/notifications-box/useNotification";
import { Notification } from "../../components/notifications-box/notifications-box";
import { Link, useSearchParams } from "react-router-dom";
import { updatePasswordByRequestService } from "../../services/user.service";

const UpdatePasswordByEmail = () => {
  const { message, type, showNotification, hideNotification } =
    useNotification();
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(PasswordSchema),
  });

  const updatePasswordByRequest = async (data: any) => {
    setLoading(true);

    if (!token) {
      showNotification("Token inválido ou ausente.", "error");
      setLoading(false);
      return;
    }

    try {
      const response = await updatePasswordByRequestService(token, {
        password: data.password,
        email: data.email,
      });

      showNotification(response.data.Message, "success");
      reset();
    } catch (error: any) {
      showNotification(
        error.response?.data?.Message ||
          error.response?.data?.error ||
          "Erro ao atualizar senha",
        "error",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(updatePasswordByRequest)}>
      <Container>
        <Content>
          <MessageBox>
            <h2>Atualizar senha</h2>
            <StyledInput
              {...register("email")}
              type="email"
              placeholder="email"
            />
            <StyledInput
              {...register("password")}
              type="password"
              placeholder="Senha"
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>

            <Text>
              A senha deve ter pelo menos 8 caracteres, incluindo um número e
              uma letra minúscula.
            </Text>

            <Label>Confirmar senha</Label>
            <StyledInput
              {...register("confirmPassword")}
              type="password"
              placeholder="Confirmar senha"
            />

            <SubmitButton type="submit">
              {loading ? <i className="fa-solid fa-c fa-spin" /> : "Atualizar"}
            </SubmitButton>
            <Link to="/sign-in">Login</Link>
          </MessageBox>

          {message && (
            <Notification
              message={message}
              type={type}
              onClose={hideNotification}
            />
          )}
        </Content>
        <Footer />
      </Container>
    </form>
  );
};

export default UpdatePasswordByEmail;
