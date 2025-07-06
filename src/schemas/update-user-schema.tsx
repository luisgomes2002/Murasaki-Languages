import { z } from "zod";

export const UserUpdateSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  username: z.string().min(1, "Username é obrigatório"),
  email: z.string().email("Email inválido"),

  gender: z.enum(["MALE", "FEMALE", "OTHER", "NONE"], {
    required_error: "Gênero é obrigatório",
  }),
  birth: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Data inválida",
  }),
});
