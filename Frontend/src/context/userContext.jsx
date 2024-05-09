import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { URL } from "../url";

export const UserContext = createContext({});
const config = {
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  
};

export function UserContextProvider({ children }) {
  const [user, setUser] = useState();
  const getUser = async () => {
    try {
      
      const res = await axios.get("/api/auth/refetch", config, {
        withCredentials: true,
      });
      console.log(res.data);
      setUser(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
