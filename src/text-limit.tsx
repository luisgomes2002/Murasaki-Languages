import React from "react";

interface TextLimitProps {
  text: string;
  limit: number;
  type: "text" | "title";
}

export const TextLimit: React.FC<TextLimitProps> = ({ text, limit, type }) => {
  const textLimited =
    text.length > limit ? `${text.substring(0, limit)}...` : text;

  if (type === "text") return <p>{textLimited}</p>;
  else return <h2>{textLimited}</h2>;
};
