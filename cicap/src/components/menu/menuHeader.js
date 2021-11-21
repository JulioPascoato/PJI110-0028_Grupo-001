import React from "react";
import { Link } from 'react-router-dom';
import { Container, Header, Section, MenuTop } from "./styles";


export const MenuHeader = () => {


    return (
        <Container>
            <Header>
                IPGG
            </Header>
                <Section>
                    <MenuTop>
                        Contato
                    </MenuTop>
                    <MenuTop>
                        Consultas
                    </MenuTop>
                    <MenuTop>
                        Downloads
                    </MenuTop>
                </Section>
            
        </Container>
    )
}