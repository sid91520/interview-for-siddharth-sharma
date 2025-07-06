import { useState,createContext  } from "react";

export const UserContext = createContext();
export function UserProvider({ children }) {
  const [filter, setFilter] = useState("all");
  return (
    <UserContext.Provider value={{ filter, setFilter}}>
      {children}
    </UserContext.Provider>
  );
}