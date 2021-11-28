import React from "react";
import { MenuHeader } from "../menu/menuHeader";
import { Container, Row, Col, Button} from "react-bootstrap";
import { ContainerSite, SectionCadastro, TituloH3 } from "./styles";

export const RelatorioCompleto = () => {
    return(

    <ContainerSite>
        
        <MenuHeader />

        <SectionCadastro>
        <Container fluid="lg"><TituloH3>Relatório de Consultas</TituloH3> </Container>       
        
        <Container fluid="lg">
            <Row>
                <Col xs={12} md={6}>
                    <label for="dataRelatorio">Selecione o dia:</label>
                    <input type="date" id="dataRelatorio" name="dataRelatorio"></input>    
                </Col>
            </Row>
            <Row>
                 <Col xs={12} md="12">
                 <Button variant="dark" type='submit'> Consultar</Button>
            </Col>
             </Row>
        
        </Container>

        
        </SectionCadastro>
     

    </ContainerSite>
    )
}
