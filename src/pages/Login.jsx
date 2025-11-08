import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import { useAuth } from "../contexts/AuthContext.jsx";
import { useNavigate } from "react-router";

export function Login() {
    const { doLogin } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const email = event.target.elements.email.value.trim();
        const password = event.target.elements.password.value.trim();

        if (email && password) {
            // trocar a flag isLogged para true
            doLogin();
            // vamos redirecionar para /dashboard
            navigate("/dashboard");
        }

    }

    return (
        <>
            <Container>
                <Navbar className="mb-3" bg="dark" data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand href="#">Minha App</Navbar.Brand>
                    </Container>
                </Navbar>
            </Container>
            <Container>
                <Card>
                    <Card.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Entrar
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}