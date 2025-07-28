import Card from "../../components/card/card";
import TransparentHeader from "../../components/transparent-header/transparent-header";
import languages from "../../assets/images/cards/card.jpg";
import lesson from "../../assets/images/cards/card1.jpg";
import partners from "../../assets/images/cards/card2.jpg";
import performance from "../../assets/images/cards/card3.jpg";
import community from "../../assets/images/cards/card4.jpg";
import Footer from "../../components/footer/footer";
import {
  About,
  Advantages,
  ButtonHome,
  Cards,
  HomeTitle,
  HomeWrapper,
  Image,
  Updates,
} from "./home-styled";

const Home = () => {
  return (
    <HomeWrapper>
      <TransparentHeader />
      <Image>
        <HomeTitle>
          <h1>MURASAKI</h1>
          <p>
            Conheça um site dedicado a pessoas que querem aprender outros
            idiomas, explorar novas culturas e compartilhar suas experiências de
            estudo!
          </p>
          <ButtonHome to="/languages">
            Começe sua jornada <i className="fa-solid fa-chevron-right"></i>
          </ButtonHome>
        </HomeTitle>
      </Image>

      <Updates>
        <h2>Próximas Atualizações</h2>
        <h3>versão atual 0.1.0</h3>
        <ul>
          <li>
            🎯 Atividades personalizadas de acordo com o conteúdo estudado -
            versão 0.2.0
          </li>
          <li>
            🧠 Decks do Anki específicos para cada atividade - versão 0.3.0
          </li>
          <li>
            📊 Relatórios inteligentes com base no seu desempenho - versão 0.4.0
          </li>
          <li>
            🌍 Comunidade ativa para tirar dúvidas e conhecer outros estudantes
            - versão 1.0.0
          </li>
        </ul>
      </Updates>

      <Cards>
        <Card title="IDIOMAS" link="/languages" image={languages} active />
        <Card title="AULAS" link="/" image={lesson} active={false} />
        <Card title="PARCEIROS" link="/" image={partners} active={false} />
        <Card title="DESEMPENHO" link="/" image={performance} active={false} />
        <Card title="COMUNIDADE" link="/" image={community} active={false} />
      </Cards>

      <About id="about">
        <img src="src/assets/images/personal/profile.png" alt="profile" />
        <p>
          Olá! Seja bem-vindo ao MURASAKI, o site definitivo para todos aqueles
          que desejam embarcar na emocionante jornada de aprender línguas. Sou
          Luis, o criador deste projeto apaixonante, e estou entusiasmado em
          compartilhar com você tudo o que o MURASAKI tem a oferecer.
        </p>
      </About>

      <Advantages>
        <img
          src="src/assets/images/background/auth-background.png"
          alt="logo"
        />
        <section>
          <h1>Conteúdo Rico e Explicações Detalhadas</h1>
          <p>
            Aprenda com textos, vídeos e músicas, tudo com explicações
            contextualizadas.
          </p>
          <h1>Exercícios Práticos para Fixação</h1>
          <p>
            Atividades com exercícios personalizados para aplicar o conteúdo
            aprendido.
          </p>
          <h1>Decks de Anki Prontos para Cada Tópico</h1>
          <p>
            Flashcards otimizados para cada lição, acelerando sua memorização.
          </p>
          <h1>Acompanhamento de Desempenho com IA</h1>
          <p>Revisões inteligentes com base no seu progresso.</p>
          <h1>Novos Idiomas em Breve!</h1>
          <p>Mais idiomas serão adicionados em breve.</p>
        </section>
      </Advantages>

      <Footer />
    </HomeWrapper>
  );
};

export default Home;
