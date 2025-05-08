import { z } from "zod";

export const SignUpSchema = z
  .object({
    name: z.string().min(3, { message: "No mínimo 3 caracteres" }),
    username: z.string().min(3, { message: "No mínimo 3 caracteres" }),
    email: z.string().email({ message: "E-mail inválido" }).toLowerCase(),
    password: z
      .string()
      .min(8, { message: "Senha deve ter no mínimo 8 caracteres" }),
    confirmPassword: z.string().min(8, {
      message: "Senha deve ter no mínimo 8 caracteres",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Senhas diferentes",
    path: ["confirmPassword"],
  });
