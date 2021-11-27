import React from "react";
import { MenuHeader } from "../menu/menuHeader";
import { Container, Row, Col, Form, Button} from "react-bootstrap";
import {Helmet} from "react-helmet";

              


export const FormColetivo = () => {
    return(
    <Container fluid>
        <MenuHeader />
        
        <Container>

        
            <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Col sm="12">
                     <input type="file" id="input" accept=".xls,.xlsx"></input>
                     <Form.Text className="text-muted">
                         Selecionar arquivos com extensão .xls / .xlsx.
                     </Form.Text>
                    </Col>
                    
                </Form.Group>
                    <Button variant="primary" type="submit" id="button"> Cadastrar</Button>
            </Form>

            
        </Container>
        <Helmet>
                  <script src="../agendamentos/converter.js" type="text/javascript" />
        </Helmet>

        <pre id="jsondata"></pre>
    </Container>
    )
}