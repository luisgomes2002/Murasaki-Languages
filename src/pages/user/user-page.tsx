import { useContext, useState } from "react";
import Footer from "../../components/footer/footer";
import PurpleHeader from "../../components/purple-header/purple-header";
import { UserContext } from "../../context/user-context";
import { Link } from "react-router-dom";
import UpdadeUserInfo from "../../components/update-user-info/update-user-info";
import UpdadePassword from "../../components/update-password/update-password";
import {
  SubscriptionUpdate,
  UpdateAreas,
  UserInfoArea,
  UserUpdateArea,
} from "./user-page-styled";

const UserPage = () => {
  const userContext = useContext(UserContext);

  let link = "https://billing.stripe.com/p/login/test_14A5kwgxi8EaasegxYefC00";

  const [activeSection, setActiveSection] = useState("profile");

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return <UpdadeUserInfo />;
      case "password":
        return <UpdadePassword />;

      default:
        return <UpdadeUserInfo />;
    }
  };

  return (
    <div>
      <PurpleHeader />
      <UserInfoArea>
        <h1>Bem vindo, {userContext?.user.name}</h1>

        <SubscriptionUpdate>
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

          <Link to="/dashboard">Dashboard</Link>
        </SubscriptionUpdate>

        <UserUpdateArea>
          <UpdateAreas>
            <button
              onClick={() => setActiveSection("profile")}
              className={activeSection === "profile" ? "active" : ""}
            >
              Perfil
            </button>
            <button
              onClick={() => setActiveSection("password")}
              className={activeSection === "password" ? "active" : ""}
            >
              Senha
            </button>
          </UpdateAreas>

          <section className="content-area">{renderContent()}</section>
        </UserUpdateArea>
      </UserInfoArea>

      <Footer />
    </div>
  );
  ``;
};

export default UserPage;
