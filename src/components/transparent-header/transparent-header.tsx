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

interface TransparentHeaderProps {
  backgroundColor?: string;
}

const TransparentHeader = ({ backgroundColor }: TransparentHeaderProps) => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const logout = () => {
    Cookies.remove("token");
    navigate("/sign-in");
  };

  const isWhiteNav = backgroundColor?.toLowerCase() === "white";

  return (
    <TransparenNav backgroundColor={backgroundColor} isWhite={isWhiteNav}>
      <Link to="/">
        MURASAKI<span>BETA</span>
      </Link>

      <RightDiv>
        <Section isWhite={isWhiteNav}>
          <Link to="">Sobre</Link>
          <Link to="/languages">Aulas</Link>
          <Link to="/subscription">Planos</Link>
        </Section>

        {userContext?.user?.name ? (
          <>
            <HeaderButtonTransparent to="/user-page" isWhite={isWhiteNav}>
              {userContext.user.name}
            </HeaderButtonTransparent>

            <LogoutButton onClick={logout} isWhite={isWhiteNav}>
              Sair
            </LogoutButton>
          </>
        ) : (
          <HeaderButtonTransparent to="/sign-in" isWhite={isWhiteNav}>
            Entrar
          </HeaderButtonTransparent>
        )}
      </RightDiv>
    </TransparenNav>
  );
};

export default TransparentHeader;
