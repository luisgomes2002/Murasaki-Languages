import { Link } from "react-router-dom";
import "./sign-in.scss";
import { signin } from "../../services/user.service";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema } from "../../schemas/sign-in-schema";
import { useState } from "react";

interface loginProps {
  email: string;
  password: string;
}

const SignIn = () => {
  const [error, setError] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignInSchema),
  });

  const login = async (data: loginProps) => {
    try {
      const response = await signin(data);
      Cookies.set("token", response.data.token, { expires: 5 });
      window.location.href = "/";
    } catch (error: any) {
      setError(error.response.data.Message);
    }
  };
  return (
    <div className="form-sign-in">
      <div className="box-sign-in">
        <div className="image-sign-in"></div>
        <form onSubmit={handleSubmit(login)}>
          <h1>Entrar no Murasaki</h1>

          <h2>Email</h2>
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setError("");
              register("email").onChange(e);
            }}
          />
          <span>{errors.email?.message}</span>

          <h2>Senha</h2>
          <input
            {...register("password")}
            type="password"
            placeholder="Senha"
            onChange={(e) => {
              setError("");
              register("password").onChange(e);
            }}
          />
          <span>{errors.password?.message}</span>
          <span>{error}</span>
          <button>Entra</button>
          <button className="google-button">
            Entrar com <i className="fa-brands fa-google"></i>
          </button>
          <div className="login">
            <p>
              Não tem uma contar? <Link to="/sign-up">Criar uma conta</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
