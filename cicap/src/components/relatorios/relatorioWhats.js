import React from "react";
import { MenuHeader } from "../menu/menuHeader";
import { Container, Row, Col, Button, Table} from "react-bootstrap";
import { ContainerSite, SectionCadastro, TituloH3 } from "./styles";
import { Link } from "react-router-dom";

export const RelatorioWhats = () => {
    return(

    <ContainerSite>
        
        <MenuHeader />

        <SectionCadastro>
        <Container fluid="lg"><TituloH3>Lembrete WhatApp</TituloH3> </Container>       
        
        <Container fluid="lg">
            <Row>
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Nome Completo</th>
                    <th>Agenda</th>
                    <th>Telefone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><input type="checkbox" /></td>
                    <td>VALDEMIR xxxxx xxxx</td>
                    <td>Dr. André xxxxx - RETORNO</td>
                    <td>(11) 9xxxx-xxxx</td>
                    </tr>
                    <tr>
                    <td><input type="checkbox" /></td>
                    <td>ALMELITA xxxxxx xx xxxxxxxx</td>
                    <td>Dr. André xxxxx - RETORNO</td>
                    <td>(11) 9xxxx-xxxx</td>
                    </tr>

                    <tr>
                    <td><input type="checkbox" /></td>
                    <td>MANOEL xx xxxxxxxx</td>
                    <td>Dr. André xxxxx - 1ª VEZ</td>
                    <td>(11) 9xxxx-xxxx</td>
                    </tr>

                    <tr>
                    <td><input type="checkbox" /></td>
                    <td>JOAQUIM xxxx xxxxxxx</td>
                    <td>Dr. André xxxxx - RETORNO</td>
                    <td>(11) 9xxxx-xxxx</td>
                    </tr>

                    <tr>
                    <td><input type="checkbox" /></td>
                    <td>MARIA xxxx xxxxxxx xxxx</td>
                    <td>Dr. André xxxxx - 1ª VEZ</td>
                    <td>(11) 9xxxx-xxxx</td>
                    </tr>
                    
                </tbody>
                </Table>
            </Row>
            <Row>
                 <Col xs={12} md="12">
                 <Link to="/relatorioCompleto"><Button variant="dark" type='submit'> Enviar Lembrete</Button></Link>
                
            </Col>
             </Row>
        
        </Container>

        
        </SectionCadastro>
     

    </ContainerSite>
    )
}
