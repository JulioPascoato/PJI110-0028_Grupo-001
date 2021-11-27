import React from "react";
import { Link } from 'react-router-dom'
import { SectionFooter, Span, ButtonFooters, H3} from './styles'
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'


export const MenuFooter = () => {

    return (


        <SectionFooter>
            <Container fluid="lg">
                <Row>
                    <Col sm={6}>
                        <Link to="/formColetivo">
                            <ButtonFooters>
                                
                                    <Span><FontAwesomeIcon icon={faBook} size="3x" /></Span>   
                                    <h4>Agendamentos com Excel</h4>                          
  
                            </ButtonFooters>
                        </Link>
                    </Col>

                        <Col sm={6}>
                            <Link to="/formIndividual">
                                <ButtonFooters>
                                
                                        <Span><FontAwesomeIcon icon={faUserFriends} size="3x" /></Span>
                                        <h4>Agendamento Individual</h4>   
                                        
                                </ButtonFooters>
                            </Link>
                        </Col>
                    
                </Row>
            </Container>
        </SectionFooter>
    )

}