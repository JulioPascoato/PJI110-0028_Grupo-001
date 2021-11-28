import React from "react";
import { Helmet } from "react-helmet";


import { Container, Navbar, Nav} from "react-bootstrap";


export const MenuHeader = () => {


    return (

      
            <Container fluid="md">

                <Navbar variant="light" expand>
            <Container fluid>
             <Navbar.Brand href="/home">CICAP</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/formColetivo">Agendamentos</Nav.Link>
                <Nav.Link href="/relatorioCompleto">Relatórios</Nav.Link>
            </Nav>
            </Container>
         </Navbar>

        <Helmet>
             <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.15.3/xlsx.full.min.js" type="text/javascript" />
        </Helmet>

         </Container>
        
        
        
        
    )
}