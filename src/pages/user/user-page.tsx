import { useContext, useEffect, useState } from "react";
import Footer from "../../components/footer/footer";
import PurpleHeader from "../../components/purple-header/purple-header";
import { UserContext } from "../../context/user-context";
import { getUserByIdService } from "../../services/user.service";
import { UserInformations } from "../../util/interfaces";
import { Link } from "react-router-dom";

const UserPage = () => {
  const userContext = useContext(UserContext);
  const [user, setUser] = useState<UserInformations>();

  let link = "https://billing.stripe.com/p/login/test_14A5kwgxi8EaasegxYefC00";

  const userInformations = async (id: string) => {
    const response = await getUserByIdService(id);
    setUser(response.data);
  };

  useEffect(() => {
    if (userContext?.user?.userId) userInformations(userContext.user.userId);
  }, [userContext?.user?.userId, user]);

  return (
    <div>
      <PurpleHeader />

      <h1>Bem vindo, {user?.name}</h1>
      <Link to="/private-dashboard">dashboard</Link>

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
