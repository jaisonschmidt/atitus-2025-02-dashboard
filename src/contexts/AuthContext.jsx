import { createContext, useContext, useState } from "react";

// Criação do contexto
const AuthContext = createContext();

// Hook para usar o contexto
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [isLogged, setIsLogged] = useState(false);

    function doLogin() {
        setIsLogged(true);
    }

    function doLogout() {
        setIsLogged(false);
    }

    return (
        <AuthContext.Provider value={{ isLogged, doLogin, doLogout }}>
            {children}
        </AuthContext.Provider>
    );
}