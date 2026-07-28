import { createContext, useState } from "react";

export const userContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  async function login({ email, password }) {}

  async function register({ email, password }) {}

  async function logout() {}

  return (
    <userContext.Provider value={{ user, login, register, logout }}>
      {children}
    </userContext.Provider>
  );
}
