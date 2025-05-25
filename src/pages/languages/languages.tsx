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

const Languages = () => {
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
          <LanguagesCard
            link="/languages/Japonês"
            name="Japonês"
            image={card5}
            isActive={true}
          />
          <LanguagesCard
            link="/languages/Coreano"
            name="Coreano"
            image={coreaiaCard}
            isActive={false}
          />
          <LanguagesCard
            link="/languages/Inglês"
            name="Inglês"
            image={euaCard}
            isActive={false}
          />
        </LanguagesLessonCards>
      </ShowLanguages>
      <Footer />
    </div>
  );
};

export default Languages;
