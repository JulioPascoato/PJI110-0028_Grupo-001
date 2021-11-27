import React from "react";
import { MenuHeader } from "../menu/menuHeader";
import { Container} from "react-bootstrap";
import ExcelReader from "../utils/ExcelReader";
import { ContainerSite, SectionCadastro, TituloH3 } from "./styles";

export const FormColetivo = () => {
    return(

    <ContainerSite>
        
        <MenuHeader />

        <SectionCadastro>
        <Container fluid="lg"><TituloH3>Cadastro em massa</TituloH3> </Container>       
        
        <ExcelReader></ExcelReader>
        
                       
        
        </SectionCadastro>
     

    </ContainerSite>
    )
}