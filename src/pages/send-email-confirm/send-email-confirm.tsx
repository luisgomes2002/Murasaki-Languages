import { useState } from "react";
import { sendConfirmEmailService } from "../../services/user.service";
import { useNotification } from "../../components/notifications-box/useNotification";
import { Notification } from "../../components/notifications-box/notifications-box";
import {
  Container,
  Content,
  Icon,
  MessageBox,
  Paragraph,
} from "../check-email/check-email-styled";
import { StyledInput } from "../sign-up/sign-up-styled";
import { SecondaryButton } from "../../components/create-lessons/create-lessons-styled";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";

const SendEmailConfirm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const { message, type, showNotification, hideNotification } =
    useNotification();

  const sendConfirmEmailFunction = async () => {
    setLoading(true);

    try {
      await sendConfirmEmailService(email);
      showNotification("Email enviado", "success");
    } catch (error: any) {
      showNotification(error.response?.data?.Message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Content>
        <MessageBox>
          <Icon className="fa-solid fa-envelope" aria-hidden="true" />
          <Paragraph>Digite o e-mail para liberar o acesso a conta.</Paragraph>
          <StyledInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <SecondaryButton
            type="button"
            onClick={sendConfirmEmailFunction}
            disabled={loading}
          >
            {loading ? <i className="fa-solid fa-c fa-spin" /> : "Enviar"}
          </SecondaryButton>
          <Link to="/sign-in">Login</Link>
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

export default SendEmailConfirm;
