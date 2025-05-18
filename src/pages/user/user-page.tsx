import { useContext } from "react";
import Footer from "../../components/footer/footer";
import PurpleHeader from "../../components/purple-header/purple-header";
import { UserContext } from "../../context/user-context";
import "./user-page.scss";

const UserPage = () => {
  const userContext = useContext(UserContext);

  let link = "https://billing.stripe.com/p/login/test_14A5kwgxi8EaasegxYefC00";

  return (
    <div>
      <PurpleHeader />

      <div>
        <button
          onClick={() =>
            window.open(
              link + "?prefilled_email=" + userContext?.user.sub,
              "_blank",
            )
          }
        >
          Atualizar assinatura
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default UserPage;
