import { z } from "zod";

export const SignUpSchema = z
  .object({
    name: z.string().min(1, "Nome é obrigatório"),
    username: z.string().min(1, "Username é obrigatório"),
    email: z.string().email("Email inválido"),
    password: z
      .string()
      .min(8, "Senha deve ter no mínimo 8 caracteres")
      .regex(/[a-z]/, "Deve conter uma letra minúscula")
      .regex(/[0-9]/, "Deve conter um número"),
    confirmPassword: z.string(),
    gender: z.enum(["MALE", "FEMALE", "OTHER", "NONE"], {
      required_error: "Gênero é obrigatório",
    }),
    birthdate: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: "Data inválida",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });
