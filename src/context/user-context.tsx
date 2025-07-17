import { createContext, ReactNode, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export interface User {
  userId?: string;
  name?: string;
  userType?: string;
  sub?: string;
}

interface UserContextType {
  user: User;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User>({});

  useEffect(() => {
    const checkToken = () => {
      const token = Cookies.get("token");

      if (token) {
        try {
          const decoded = jwtDecode<User & { exp: number }>(token);
          const currentTime = Date.now() / 1000;

          if (decoded.exp < currentTime) {
            Cookies.remove("token");
            setUser({});
          } else {
            setUser(decoded);
          }
        } catch (err) {
          console.error("Erro ao decodificar token:", err);
          Cookies.remove("token");
          setUser({});
        }
      } else {
        setUser({});
      }
    };

    checkToken();
    const interval = setInterval(checkToken, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
