import { Nav } from "@/types/types";
import { createContext, useContext, useState } from "react";

type NavigationProviderProps = {
  children: React.ReactNode;
  defaultNav?: Nav;
};

type NavigationProviderState = {
  currentNav: Nav;
  setCurrentNav: (currentNav: Nav) => void;
};

const initialState: NavigationProviderState = {
  currentNav: "home",
  setCurrentNav: () => null,
};

const NavigationProviderContext =
  createContext<NavigationProviderState>(initialState);

export function NavigationProvider({
  children,
  defaultNav = "home",
}: NavigationProviderProps) {
  const [currentNav, setCurrentNav] = useState<Nav>(defaultNav as Nav);

  const value = {
    currentNav,
    setCurrentNav: (currentNav: Nav) => setCurrentNav(currentNav),
  };

  return (
    <NavigationProviderContext.Provider value={value}>
      {children}
    </NavigationProviderContext.Provider>
  );
}

export const useNavigation = () => {
  const context = useContext(NavigationProviderContext);

  if (context === undefined)
    throw new Error("useNavigation must be used within a NavigationProvider");

  return context;
};
