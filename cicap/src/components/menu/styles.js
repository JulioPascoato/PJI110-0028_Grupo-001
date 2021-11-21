import styled from 'styled-components';

export const Container = styled.div`
   
    text-align:center;
    background-color: #fdfdfd;
    flex-direction:row;
    
    justify-content:space-between;    
    height: 50px;
`
export const Header = styled.header `
    position: fixed;
    left: 0;
    margin-left: 150px;
    font-size: 30px;
    align-items:center;
    margin-top: 10px;
    color: #3b3d3c;
    
`
export const Section = styled.section`
    position: fixed;
    right: 0;
    margin-right: 150px;
    margin-top: 10px;

`
export const MenuTop = styled.a`
    margin: 8px;
    font-size: 20px;
    text-decoration: none;
    color: #3b3d3c;
    cursor: pointer;
    :hover{

    }
    
`

export const SectionFooter = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 35px;
   

`
export const DivFooters = styled.div`

    
    width: 50%;
    display: flex;
    justify-content: center;
`

export const ButtonFooters = styled.button`

    width: 250px;
    height: 150px;
    border-radius: 10px;
    background-color: transparent;
    box-shadow: 60px #000;
`