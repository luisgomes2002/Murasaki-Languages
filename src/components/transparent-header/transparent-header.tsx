import { useContext } from "react";
import { UserContext } from "../../context/user-context";
import { Link, useNavigate } from "react-router-dom";
import {
  TransparenNav,
  RightDiv,
  Section,
  HeaderButtonTransparent,
  LogoutButton,
} from "./transparent-header-styled";
import Cookies from "js-cookie";

const TransparentHeader = () => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const logout = () => {
    Cookies.remove("token");
    navigate("/sign-in");
  };

  return (
    <TransparenNav>
      <Link to="/">
        MURASAKI<span>BETA</span>
      </Link>

      <RightDiv>
        <Section>
          <Link to="">Sobre</Link>
          <Link to="/languages">Aulas</Link>
          <Link to="/subscription">Planos</Link>
          {/* <Link to="">Comunidade</Link> */}
        </Section>

        {userContext?.user?.name ? (
          <>
            <HeaderButtonTransparent to="/user-page">
              {userContext.user.name}
            </HeaderButtonTransparent>

            <LogoutButton onClick={logout}>Sair</LogoutButton>
          </>
        ) : (
          <HeaderButtonTransparent to="/sign-in">
            Entrar
          </HeaderButtonTransparent>
        )}
      </RightDiv>
    </TransparenNav>
  );
};

export default TransparentHeader;
