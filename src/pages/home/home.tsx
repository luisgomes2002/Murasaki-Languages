import { Link } from "react-router-dom";
import Card from "../../components/card/card";
import TransparentHeader from "../../components/transparent-header/transparent-header";
import languages from "../../assets/images/cards/card.jpg";
import lesson from "../../assets/images/cards/card1.jpg";
import partners from "../../assets/images/cards/card2.jpg";
import performance from "../../assets/images/cards/card3.jpg";
import community from "../../assets/images/cards/card4.jpg";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <TransparentHeader />
      <div className="image">
        <div className="home-title">
          <h1>MURASAKI</h1>
          <p>
            Conheça um site dedicado a pessoas que querem aprender outros
            idiomas, explorar novas culturas e compartilhar suas experiências de
            estudo!
          </p>

          <Link to="/" className="button-home">
            Começe sua jornada <i className="fa-solid fa-chevron-right"></i>
          </Link>
        </div>
      </div>
      <div className="cards">
        <Card title="IDIOMAS" link="/" image={languages} />
        <Card title="AULAS" link="/" image={lesson} />
        <Card title="PARCEIROS" link="/" image={partners} />
        <Card title="DESEMPENHO" link="/" image={performance} />
        <Card title="COMUNIDADE" link="/" image={community} />
      </div>

      <div id="about" className="about">
        <img src="src/assets/images/personal/profile.png" alt="profile" />
        <p>
          Olá! Seja bem-vindo ao MURASAKI, o site definitivo para todos aqueles
          que desejam embarcar na emocionante jornada de aprender línguas. Sou
          Luis, o criador deste projeto apaixonante, e estou entusiasmado em
          compartilhar com você tudo o que o MURASAKI tem a oferecer. Aqui,
          utilizamos um método de estudo que considero o mais eficiente e
          prazeroso, garantindo que seu aprendizado seja dinâmico, imersivo e
          adaptado ao seu ritmo. Junte-se a nós no MURASAKI e comece sua jornada
          de aprendizado de idiomas hoje mesmo. Vamos explorar juntos as
          maravilhas das línguas e desbloquear um mundo de oportunidades!
        </p>
      </div>
      <div className="advantages">
        <img src="src/assets/images/background/teste.png" alt="logo" />
        <section>
          <h1>Conteúdo Rico e Explicações Detalhadas</h1>
          <p>
            Aprenda com textos, notícias atualizadas, vídeos imersivos e músicas
            - tudo acompanhado de anotações claras e explicações
            contextualizadas.
          </p>
          <h1>Exercícios Práticos para Fixação</h1>
          <p>
            Cada atividade vem com exercícios personalizados, garantindo que
            você aplique o que aprendeu de forma eficiente e divertida.
          </p>
          <h1>Decks de Anki Prontos para Cada Tópico</h1>
          <p>
            Não perca tempo criando flashcards! Disponibilizamos decks de Anki
            otimizados para cada lição, acelerando sua memorização.
          </p>
          <h1>Acompanhamento de Desempenho com IA</h1>
          <p>
            Nossa IA analisa seu progresso e sugere revisões inteligentes,
            ajudando você a focar no que realmente importa.
          </p>
          <h1>Novos Idiomas em Breve!</h1>
          <p>
            Além das opções atuais, em breve teremos mais idiomas disponíveis
            para você explorar. Fique de olho!
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;
