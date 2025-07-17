import { useEffect, useState } from "react";
import Footer from "../../components/footer/footer";
import { confirmEmailService } from "../../services/mail.service";
import {
  Container,
  Content,
  Heading,
  Icon,
  MessageBox,
  Paragraph,
  StyledLink,
} from "../check-email/check-email-styled";
import { useNotification } from "../../components/notifications-box/useNotification";
import { Notification } from "../../components/notifications-box/notifications-box";
import { useSearchParams } from "react-router-dom";

const ConfirmEmail = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [loading, setLoading] = useState<boolean>(false);
  const { message, type, showNotification, hideNotification } =
    useNotification();

  const confirmEmail = async (token: string) => {
    setLoading(true);
    try {
      await confirmEmailService(token);
      showNotification("Conta verificada", "success");
    } catch (error: any) {
      showNotification(error.response?.data.Message, "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      confirmEmail(token);
    }
  }, [token]);

  return (
    <Container>
      <Content>
        <MessageBox>
          {loading ? (
            <i className="fa-solid fa-c fa-spin" />
          ) : (
            <>
              <Icon className="fa-solid fa-envelope" aria-hidden="true" />
              <Heading>E-mail confirmado</Heading>
              <Paragraph>
                E-mail confirmado com sucesso! Seu acesso à conta está liberado.
              </Paragraph>
              <StyledLink to="/sign-in" aria-label="Ir para a página de login">
                Login
              </StyledLink>
            </>
          )}
        </MessageBox>
      </Content>
      <Footer />

      {message && (
        <Notification
          message={message}
          type={type}
          onClose={hideNotification}
        />
      )}
    </Container>
  );
};

export default ConfirmEmail;
