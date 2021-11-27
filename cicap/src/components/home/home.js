import React from "react";
import { MenuHeader } from "../menu/menuHeader";
import { MenuFooter } from "../menu/menuFooter";
import Img from '../images/design-software.png'
import { Container, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import { SectionMenu, ContainerSite, ButtonSuccess  } from './styles'


export const Home = () => {
    return (
        <ContainerSite>

            <MenuHeader />            
            
            <SectionMenu>
                <Container fluid>
                    <Row>
                        <Col sm={8}>
                            <h3 class="small-heading">Sistema Cadastro de Consultas</h3>
                            <h1 class="big-heading">Instituto Paulista de Geriatria e Gerontologia (IPGG) José Ermírio de Moraes</h1>
                            <Link to="/home">
                                <ButtonSuccess>Lembrete WhatsApp </ButtonSuccess>
                            </Link>
                                  
                        </Col>
                        <Col sm={4}>
                            <img src={Img} alt="logo" />
                        </Col>
                    </Row>
                </Container>
            </SectionMenu>

            <MenuFooter />

        </ContainerSite>
    )
}