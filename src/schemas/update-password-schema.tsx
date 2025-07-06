import { z } from "zod";

export const PasswordSchema = z
  .object({
    email: z.string().email("Email inválido"),
    password: z
      .string()
      .min(8, "Senha deve ter no mínimo 8 caracteres")
      .regex(/[a-z]/, "Deve conter uma letra minúscula")
      .regex(/[0-9]/, "Deve conter um número"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });
