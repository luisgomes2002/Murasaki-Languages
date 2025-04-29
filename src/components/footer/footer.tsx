import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="">Murasaki</Link>
      <p>© 2025. Murasaki Languages ●</p>

      <div className="icons">
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
      </div>
    </div>
  );
};

export default Footer;
