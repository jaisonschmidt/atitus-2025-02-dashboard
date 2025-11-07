/**
 * No load do componente, pegar o valor de isLogged
 * Se for false, redirecionar para a página de login
 * Se for true, mostrar o conteúdo do dashboard
 */
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
    const { isLogged } = useAuth();
    const navigate = useNavigate();

    // ocorre no load do componente
    useEffect(() => {
        if (!isLogged) {
            // redirecionar para a página de login
            navigate("/");
        }
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Bem-vindo ao dashboard! Aqui você pode acessar as principais funcionalidades do sistema.</p>
        </div>
    );
}