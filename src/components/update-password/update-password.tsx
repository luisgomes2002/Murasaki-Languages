import { Label } from "recharts";
import {
  ErrorMessage,
  StyledInput,
  SubmitButton,
  Text,
} from "../../pages/sign-up/sign-up-styled";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updatePasswordService } from "../../services/user.service";
import { UserContext } from "../../context/user-context";
import { useNotification } from "../notifications-box/useNotification";
import { Notification } from "../notifications-box/notifications-box";
import { PasswordSchema } from "../../schemas/update-password-schema";

const UpdadePassword = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const userContext = useContext(UserContext);
  const { message, type, showNotification, hideNotification } =
    useNotification();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(PasswordSchema),
  });

  const updatePassword = async (data: {
    password: string;
    confirmPassword: string;
  }) => {
    setLoading(true);

    try {
      const userId = userContext?.user?.userId;
      if (!userId) throw new Error("Usuário não autenticado");

      const response = await updatePasswordService(userId, data.password);

      showNotification(response.data.Message, "success");
    } catch (error: any) {
      showNotification(error.response?.data?.Message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(updatePassword)}>
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

      {message && (
        <Notification
          message={message}
          type={type}
          onClose={hideNotification}
        />
      )}

      <SubmitButton type="submit">
        {loading ? <i className="fa-solid fa-c fa-spin" /> : "Atualizar"}
      </SubmitButton>
    </form>
  );
};

export default UpdadePassword;
