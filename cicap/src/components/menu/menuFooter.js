import React from "react";
import { SectionFooter, Span} from './styles'
import { Container, Row, Col, Button} from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import {faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons'


export const MenuFooter = () => {
    
    return (


<SectionFooter>
    <Container fluid="lg">
        <Row>
        <Col sm={4}>
            <Span><FontAwesomeIcon icon={faBook} size="3x" /></Span>
            <h3 >Agendamento</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </Col>

        <Col sm={4}>
            <Span><FontAwesomeIcon icon={faUserFriends} size="3x" /></Span>
          
            <i class="icon fas fa-user-friends fa-3x"></i>
            <h3 >Elite Clientele</h3>
            <p>Vestibulum cursus, risus eget consectetur ullamcorper.</p>
            </Col>

        <Col sm={4}>
            <Span><FontAwesomeIcon icon={faHeartbeat} size="3x" /></Span>
            <h3>Guaranteed to work.</h3>
            <p>Nunc rutrum, sapien sed tristique aliquet.z </p>
            </Col>
        </Row>
    </Container>
</SectionFooter>
    )

}