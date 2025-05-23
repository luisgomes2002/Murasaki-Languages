export const formatDate = (
  dateInput: string | Date,
  locale: string = "pt-BR",
  options?: Intl.DateTimeFormatOptions,
): string => {
  const date = new Date(dateInput);

  if (isNaN(date.getTime())) return "Data inválida";

  return date.toLocaleDateString(locale, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    ...options,
  });
};
