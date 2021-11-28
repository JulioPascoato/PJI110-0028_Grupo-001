import styled from "styled-components";


export const Container = styled.section`
    position: fixed;
    left: 1em;
    width: 95%;
    height: 90%;
    list-style-type: none;
    margin: 50;
    padding: 0;
    background: #f7f7f7;
    z-index:10;  
    overflow:hidden;
    box-shadow: 2px 0 18px rgba(0, 0, 0, 0.26);
    overflow:auto;
    margin-top:10px;

`
export const ConteudoTitulo = styled.section`
    display: flex;
    justify-content: space-between;    
`;

export const Titulo = styled.h2`

    color: #345B63;
    font-size: 30px;
    padding: 15px;

`;

export const TituloH3 = styled.h3`

    color: #345B63;
    font-size: 30px;
    padding: 25px 0px;

`;

export const BotaoAcao = styled.section`
    margin: 25px 0px;
    padding: 0px 100px 0px 0px; 
        
`;

export const ButtonSuccess = styled.button`
    background-color: #fff;
    color: #345B63; 
    padding: 8px 20px ;
    border: 1px solid #345B63; 
    border-radius: 4px;
    cursor:pointer;
    font-size: 18px;
    :hover{
        background-color: #345B63; 
        color: #fff;
    }
`;

export const Label = styled.label`
    width: 45%;
    padding: 12px;
    margin-top: 6px;    
    font-size: 18px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: boder-box;    
    font-size: 16px;
    resize:vertical;
`;

export const Select = styled.select`
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: boder-box;
    margin-top: 5px;
    margin-bottom: 8px;
    font-size: 18px;
    resize:vertical;
`;


export const ContainerSite =styled.div`

    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    text-align: left;
    color: #112031;
`;

export const SectionCadastro =styled.section`
    background-color: #D4ECDD;
    padding: 70px 15px 200px 70px;
    text-align: left;
 `
