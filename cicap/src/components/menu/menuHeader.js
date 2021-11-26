import React from "react";


import { Container, Navbar, Nav} from "react-bootstrap";


export const MenuHeader = () => {


    return (

      
            <Container fluid="md">
                <Navbar variant="light" expand>
            <Container fluid>
             <Navbar.Brand href="/home">CICAP</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="#features">Agendamentos</Nav.Link>
                <Nav.Link href="/formIndividual">Cadastro</Nav.Link>
            </Nav>
            </Container>
         </Navbar>
         </Container>
        
        
        
        
    )
}