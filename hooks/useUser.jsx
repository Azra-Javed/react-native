import { useContext } from "react";
import { userContext } from "../context/UserContext";

export function useUser() {
  //grab all values that useProvider provides us (user, login, logout, register)
  const context = useContext(userContext);

  if (!context) throw new Error("userUser must be used within a userProvider.");

  return context;
}
