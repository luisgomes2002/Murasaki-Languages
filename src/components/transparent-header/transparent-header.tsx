import { useContext } from "react";
import { UserContext } from "../../context/user-context";
import { Link } from "react-router-dom";
import {
  TransparenNav,
  RightDiv,
  Section,
  StyledLink,
  Button,
  HeaderButtonTransparent,
} from "./transparent-header-styled";

const TransparentHeader = () => {
  const userContext = useContext(UserContext);

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
            <StyledLink to="/user-page">{userContext.user.name}</StyledLink>
            <Button>
              <i className="fa-solid fa-caret-down"></i>
            </Button>
            {/* <Link to="/sign-in">Sair</Link> */}
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
