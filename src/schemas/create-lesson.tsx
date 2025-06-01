import { z } from "zod";

export const CreateLessonSchema = z
  .object({
    title: z.string().min(1, "Título é obrigatório"),
    text: z.string().min(1, "Conteúdo da aula é obrigatório"),
    links: z.array(z.string().url("Link inválido")).optional(),
    languageType: z.enum(["JP", "EN", "KO"], {
      required_error: "Idioma é obrigatório",
    }),
    languagesLevels: z.string().optional(),
    ankiLink: z
      .string()
      .url("Link do Anki inválido")
      .optional()
      .or(z.literal("")),
    thumbLink: z
      .string()
      .url("Link da thumbnail inválido")
      .optional()
      .or(z.literal("")),
  })
  .refine(
    (data) => {
      if (data.languageType === "JP") {
        return ["N5", "N4", "N3", "N2", "N1"].includes(
          data.languagesLevels || "",
        );
      }
      if (data.languageType === "EN") {
        return ["A1", "A2", "B1", "B2", "C1", "C2"].includes(
          data.languagesLevels || "",
        );
      }
      if (data.languageType === "KO") {
        return [
          "TOPIK_I_LEVEL_1",
          "TOPIK_I_LEVEL_2",
          "TOPIK_II_LEVEL_3",
          "TOPIK_II_LEVEL_4",
          "TOPIK_II_LEVEL_5",
          "TOPIK_II_LEVEL_6",
        ].includes(data.languagesLevels || "");
      }
      return false;
    },
    {
      message: "Nível inválido para o idioma selecionado",
      path: ["languagesLevels"],
    },
  );
