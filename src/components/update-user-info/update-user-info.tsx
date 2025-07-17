import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user-context";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  getUserByIdService,
  updateUserBaseInfoService,
} from "../../services/user.service";
import {
  ErrorMessage,
  Label,
  StyledInput,
  StyledSelect,
  SubmitButton,
} from "../../pages/sign-up/sign-up-styled";
import { UserUpdateSchema } from "../../schemas/update-user-schema";
import { useNotification } from "../notifications-box/useNotification";
import { Notification } from "../notifications-box/notifications-box";

const UpdateUserInfo = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const userContext = useContext(UserContext);
  const { message, type, showNotification, hideNotification } =
    useNotification();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(UserUpdateSchema),
  });

  const userInformations = async (id: string) => {
    try {
      const response = await getUserByIdService(id);
      console.log(response);

      const userData = response.data;

      reset({
        name: userData.name,
        username: userData.username,
        email: userData.email,
        birth: userData.birth?.split("T")[0],
        gender: userData.gender,
      });
    } catch (err) {
      showNotification("Erro ao buscar dados do usuário", "error");
    }
  };

  const updateUserBaseInfo = async (data: any) => {
    setLoading(true);

    try {
      const userId = userContext?.user?.userId;
      if (!userId) throw new Error("Usuário não autenticado");

      const userToUpdate = {
        name: data.name,
        username: data.username,
        email: data.email,
        birth: data.birth,
        gender: data.gender,
      };

      const response = await updateUserBaseInfoService(userId, userToUpdate);
      showNotification(response.data.Message, "success");
    } catch (error: any) {
      showNotification(error.response.data.Message, "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userContext?.user?.userId) {
      userInformations(userContext.user.userId);
    }
  }, [userContext?.user?.userId]);

  return (
    <form onSubmit={handleSubmit(updateUserBaseInfo)}>
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
      <StyledInput {...register("email")} type="email" placeholder="Email" />
      <ErrorMessage>{errors.email?.message}</ErrorMessage>

      <Label>Data de nascimento</Label>
      <StyledInput {...register("birth")} type="date" />
      <ErrorMessage>{errors.birth?.message}</ErrorMessage>

      <Label>Gênero</Label>
      <StyledSelect {...register("gender")}>
        <option value="">Selecione</option>
        <option value="MALE">Masculino</option>
        <option value="FEMALE">Feminino</option>
        <option value="OTHER">Outro</option>
        <option value="NONE">Não informar</option>
      </StyledSelect>
      <ErrorMessage>{errors.gender?.message}</ErrorMessage>

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

export default UpdateUserInfo;
