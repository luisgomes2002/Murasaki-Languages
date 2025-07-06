import Footer from "../../components/footer/footer";
import {
  Container,
  Content,
  Heading,
  Icon,
  MessageBox,
  Paragraph,
  StyledLink,
} from "./check-email-styled";

const CheckEmail = () => {
  return (
    <Container>
      <Content>
        <MessageBox>
          <Icon className="fa-solid fa-envelope" aria-hidden="true" />
          <Heading>Verifique seu e-mail</Heading>
          <Paragraph>
            Enviamos um link para o seu e-mail. Acesse sua caixa de entrada e
            siga as instruções para continuar.
          </Paragraph>
          <StyledLink to="/sign-in" aria-label="Ir para a página de login">
            Login
          </StyledLink>
        </MessageBox>
      </Content>
      <Footer />
    </Container>
  );
};

export default CheckEmail;
