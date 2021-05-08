import { createContext, useContext, useState, useMemo } from "react";

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
  return <userContext.Provider {...{ children, value }} />;
};

export { useUserContext, UserProvider };
