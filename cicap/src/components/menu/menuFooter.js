import React from "react";
import { SectionFooter, DivFooters, ButtonFooters} from './styles'


export const MenuFooter = () => {
    
    return (
        <SectionFooter>
            <DivFooters>
                <ButtonFooters>
                    Lançamentos individuais 
                </ButtonFooters>
            </DivFooters>
            <DivFooters>
                <ButtonFooters>
                    Upload de Arquivos
                </ButtonFooters>
            </DivFooters>
        </SectionFooter>
    )
}