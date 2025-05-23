import { Link } from "react-router-dom";
import { FooterContainer, IconsDiv } from "./footer-styled";

const Footer = () => {
  return (
    <FooterContainer>
      <Link to="">Murasaki</Link>
      <p>© 2025. Murasaki Languages ●</p>

      <IconsDiv>
        <Link to="">
          <i className="fa-brands fa-instagram"></i>
        </Link>
        <Link to="">
          <i className="fa-brands fa-youtube"></i>
        </Link>
        <Link to="">
          <i className="fa-brands fa-github"></i>
        </Link>
        <Link to="">
          <i className="fa-solid fa-envelope"></i>
        </Link>
      </IconsDiv>
    </FooterContainer>
  );
};

export default Footer;
