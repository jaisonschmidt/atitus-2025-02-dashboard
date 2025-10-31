import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export function Login() {
    return (
        <>
            <Container>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#">Navbar</Navbar.Brand>
                    </Container>
                </Navbar>
            </Container>
        </>
    );
}