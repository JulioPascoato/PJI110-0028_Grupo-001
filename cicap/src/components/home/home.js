import React from "react";
import { MenuHeader } from "../menu/menuHeader";
import { MenuFooter } from "../menu/menuFooter";
import { SectionMenu } from "./styles"
import Img from '../images/design-software.png'

export const Home = () => {
    return (
        <div>
            <MenuHeader />
            <SectionMenu>
                <div>
                    <p>Sistema de Cadastro de Consultas</p>
                    <h2>INSTITUTO PAULISTA DE GERIATRIA E GERONTOLOGIA - IPGG - JOSÉ ERMIRIO DE MORAIS</h2>
                    <div>
                        <button> AGENDAMENTOS</button>
                    </div>
                </div>
                <div>
                    <img src={Img} alt="logo" />
                </div>
            </SectionMenu>
            <MenuFooter />

        </div>
    )
}