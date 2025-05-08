import { Link } from "react-router-dom";
import "./sign-up.scss";
import { signup } from "../../services/user.service";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema } from "../../schemas/sign-up-schema";

interface CreateUserProps {
  name: string;
  username: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const [error, setError] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignUpSchema),
  });

  const CreateAccount = async (data: CreateUserProps) => {
    try {
      await signup(data);
      window.location.href = "/sign-in";
    } catch (error: any) {
      setError(error.response.data.Message);
    }
  };

  return (
    <div className="form-sign-up">
      <div className="box-sign-up">
        <div className="image-sign-up"></div>
        <form onSubmit={handleSubmit(CreateAccount)}>
          <h1>Inscreva-se no Murasaki</h1>
          <h2>Nome</h2>
          <input {...register("name")} type="text" placeholder="Nome" />
          <span>{errors.name?.message}</span>
          <h2>Username</h2>
          <input {...register("username")} type="text" placeholder="Username" />
          <span>{errors.username?.message}</span>
          <h2>Email</h2>
          <input {...register("email")} type="email" placeholder="Email" />
          <span>{errors.email?.message}</span>
          <h2>Senha</h2>
          <input
            {...register("password")}
            type="password"
            placeholder="Senha"
          />
          <span>{errors.password?.message}</span>
          <p className="specification">
            A senha deve ter pelo menos 8 caracteres, incluindo um número e uma
            letra minúscula.
          </p>
          <h2>Confirmar senha</h2>
          <input
            {...register("confirmPassword")}
            type="password"
            placeholder="Confirmar senha"
          />
          <span>{errors.confirmPassword?.message}</span>
          <span>{error}</span>
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
