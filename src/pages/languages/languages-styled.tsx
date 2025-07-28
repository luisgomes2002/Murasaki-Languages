import styled from "styled-components";

export const ShowLanguages = styled.div`
  text-align: center;
  background-color: white;

  h1 {
    padding: 6% 0 0 0;
    font-weight: 400;
    font-size: 40px;

    @media (max-width: 1440px) {
      font-size: 36px;
    }

    @media (max-width: 1280px) {
      font-size: 32px;
    }

    @media (max-width: 1024px) {
      font-size: 28px;
    }

    @media (max-width: 768px) {
      font-size: 24px;
    }

    @media (max-width: 414px) {
      font-size: 22px;
    }

    @media (max-width: 375px) {
      font-size: 20px;
    }
  }
`;

export const LanguagesLessonCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2%;
  padding-bottom: 6%;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LanguageDescription = styled.p`
  max-width: 1000px;
  text-align: center;
  margin: 1rem auto;
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
  padding: 0 1rem;

  @media (max-width: 1440px) {
    font-size: 1rem;
  }

  @media (max-width: 1280px) {
    font-size: 0.95rem;
  }

  @media (max-width: 1024px) {
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 414px) {
    font-size: 0.8rem;
  }

  @media (max-width: 375px) {
    font-size: 0.75rem;
  }
`;

export const LanguageSubDescription = styled.p`
  max-width: 1000px;
  text-align: center;
  margin: 0 auto 2rem;
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
  padding: 0 1rem;

  @media (max-width: 1024px) {
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 414px) {
    font-size: 0.8rem;
  }

  @media (max-width: 375px) {
    font-size: 0.75rem;
  }
`;
