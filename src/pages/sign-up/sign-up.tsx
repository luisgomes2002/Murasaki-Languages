import { Link } from "react-router-dom";
import "./sign-up.scss";

const SignUp = () => {
  return (
    <div className="form-sign-up">
      <div className="box-sign-up">
        <div className="image-sign-up"></div>
        <form>
          <h1>Inscreva-se no Murasaki</h1>
          <h2>Nome</h2>
          <input type="text" placeholder="Nome" />
          <h2>Username</h2>
          <input type="text" placeholder="Username" />
          <h2>Email</h2>
          <input type="email" placeholder="Email" />
          <h2>Senha</h2>
          <input type="password" placeholder="Senha" />
          <p className="specification">
            A senha deve ter pelo menos 8 caracteres, incluindo um número e uma
            letra minúscula.
          </p>
          <h2>Confirmar senha</h2>
          <input type="password" placeholder="Confirmar senha" />
          <button>Criar</button>
          <div className="login">
            <p>
              Já tem uma contar? <Link to="/sign-in">Entrar</Link>
            </p>
          </div>
          <p className="terms">
            Ao criar uma conta, você concorda com os Termos de Serviço. Para
            mais informações sobre as práticas de privacidade da Murasaki
            Languages, consulte a Política de Privacidade. Ocasionalmente,
            enviaremos e-mails relacionados à sua conta.
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
