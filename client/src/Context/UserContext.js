import { createContext, useContext, useState, useMemo, useEffect } from "react";
import { getUserInfo } from "../Helpers/requests";
import { existsToken } from "../Helpers/token";

const userContext = createContext();

const useUserContext = () => {
  const user = useContext(userContext);
  if (!user) {
    return console.log("DEBE EXISTIR UN CONTEXTO PARA EL USUARIO!");
  }
  return user;
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const value = useMemo(() => ({ user, setUser }), [user]);
  useEffect(() => {
    async function userInfo() {
      try {
        const user = await getUserInfo();
        if (user) setUser((u) => ({ ...user, ...u }));
      } catch (err) {
        console.log(err);
      }
    }
    if (existsToken()) userInfo();
  }, []);
  return <userContext.Provider {...{ children, value }} />;
};

export { useUserContext, UserProvider };
