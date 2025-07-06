import { useState } from "react";
import Footer from "../../components/footer/footer";
import { sendPasswordRequestService } from "../../services/user.service";
import {
  Container,
  Content,
  Icon,
  MessageBox,
  Paragraph,
} from "../check-email/check-email-styled";
import { StyledInput, StyledLink } from "../sign-up/sign-up-styled";
import { useNotification } from "../../components/notifications-box/useNotification";
import { Notification } from "../../components/notifications-box/notifications-box";
import { SecondaryButton } from "../../components/create-lessons/create-lessons-styled";
import { Link } from "react-router-dom";

const PasswordSendEmail = () => {
  const [email, setEmail] = useState<string>("");
  const { message, type, showNotification, hideNotification } =
    useNotification();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      await sendPasswordRequestService(email);
      showNotification("Email enviado com sucesso", "success");
    } catch (error) {
      showNotification("Erro ao enviar e-mail de recuperação.", "error");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Content>
        <MessageBox>
          <Icon className="fa-solid fa-envelope" aria-hidden="true" />
          <Paragraph>Digite o e-mail para a recuperção da senha.</Paragraph>
          <StyledInput
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <SecondaryButton
            type="button"
            onClick={handleSubmit}
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

export default PasswordSendEmail;
