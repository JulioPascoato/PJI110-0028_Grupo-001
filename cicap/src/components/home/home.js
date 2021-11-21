import React from "react";
import { MenuHeader } from "../menu/menuHeader";
import { MenuFooter } from "../menu/menuFooter";
import Img from '../images/design-software.png'


import { Container, Row, Col, Button} from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'


import { SectionMenu, ContainerSite} from './styles'


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
                        <Button size="md" variant="dark"> <FontAwesomeIcon icon={faBook} />Agendamento </Button>
                        
                      
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