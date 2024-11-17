import React, { createContext, ReactNode, useContext } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

// Apibrėžkite user objektą su email ir password
interface User {
  email: string;
  password: string; // Pridėkite password lauką
}

// UserContext tipo apibrėžimas
interface UserContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useLocalStorage<User | null>("user", null);

  const login = (user: User) => setUser(user);
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export { UserProvider, UserContext, useUser };
