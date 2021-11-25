import React from "react";
import { Link } from 'react-router-dom'
import { SectionFooter, Span, ButtonFooters } from './styles'
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'


export const MenuFooter = () => {

    return (


        <SectionFooter>
            <Container fluid="lg">
                <Row>

                    <ButtonFooters>
                        <Link to="">
                            <Col sm={8}>
                                <Span><FontAwesomeIcon icon={faBook} size="3x" /></Span>
                                <h3 >Agendamentos Coletivos</h3>                                
                            </Col>
                        </Link>
                    </ButtonFooters>

                    <ButtonFooters>
                        <Link to="/formIndividual">
                            <Col sm={8}>
                                <Span><FontAwesomeIcon icon={faUserFriends} size="3x" /></Span>
                                <i class="icon fas fa-user-friends fa-3x"></i>
                                <h3>Agendamento Individual</h3>
                                
                            </Col>
                        </Link>
                    </ButtonFooters>

                    
                </Row>
            </Container>
        </SectionFooter>
    )

}