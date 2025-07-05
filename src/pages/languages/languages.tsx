import Footer from "../../components/footer/footer";
import PurpleHeader from "../../components/purple-header/purple-header";
import {
  LanguageDescription,
  LanguagesLessonCards,
  ShowLanguages,
} from "./languages-styled";
import LanguagesCard from "../../components/languages-card/languages-card";
import card5 from "../../assets/images/cards/card5.jpg";
import coreaiaCard from "../../assets/images/cards/coreaia-card.jpg";
import euaCard from "../../assets/images/cards/eua-card.jpg";
import { getLessonCollectionsService } from "../../services/collections.service";
import { useEffect, useState } from "react";
import { LanguageCollectionsProps } from "../../util/interfaces";
import { Notification } from "../../components/notifications-box/notifications-box";
import { useNotification } from "../../components/notifications-box/useNotification";

const Languages = () => {
  const [languages, setLanguages] = useState<LanguageCollectionsProps[]>([]);
  const { message, type, showNotification, hideNotification } =
    useNotification();

  const languageImages = [euaCard, card5, coreaiaCard];

  const getLessonCollections = async () => {
    try {
      const response = await getLessonCollectionsService();
      setLanguages(response.data);
    } catch (error: any) {
      showNotification(error.response?.data?.Message, "error");
    }
  };

  useEffect(() => {
    getLessonCollections();
  }, []);

  return (
    <div>
      <PurpleHeader />
      <ShowLanguages>
        <h1>Qual lingua quer estudar</h1>
        <LanguageDescription>
          Dê o primeiro passo rumo à fluência com aulas gratuitas e comece a
          destravar um mundo de oportunidades. Com nossos planos de assinatura,
          você desbloqueia acesso completo a todas as aulas, atividades
          exclusivas, flashcards no estilo Anki e uma poderosa IA que analisa
          seu desempenho e te ajuda a evoluir mais rápido.
        </LanguageDescription>
        <LanguagesLessonCards>
          {languages.map((language, index) => (
            <LanguagesCard
              key={language.id}
              link={`/languages/${language.id}`}
              name={language.languageName}
              image={languageImages[index % languageImages.length]}
              isActive={!language.status} // trocar
            />
          ))}
        </LanguagesLessonCards>
      </ShowLanguages>

      {message && (
        <Notification
          message={message}
          type={type}
          onClose={hideNotification}
        />
      )}
      <Footer />
    </div>
  );
};

export default Languages;
