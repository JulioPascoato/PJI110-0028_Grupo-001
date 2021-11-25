import React from "react";
import { Container, ConteudoTitulo, Titulo, BotaoAcao, ButtonSuccess, Label, Input, Select } from './styles'
import { Link } from "react-router-dom";

export const FormIndividual = () => {
    return (
        <Container>
            <ConteudoTitulo>
                <Titulo>CADASTRO INDIVIDUAL</Titulo>
                <BotaoAcao>
                    <Link to="/home">
                        <ButtonSuccess>Home</ButtonSuccess>
                    </Link>
                </BotaoAcao>
            </ConteudoTitulo>
            <form>
                <Label>DATA DA CONSULTA:
                    <Input type="date"></Input>
                </Label>
                <Label>Horário:
                    <Input type="time" min="8:00" max="18:00"></Input>
                </Label>
                <Label>Código do Paciente
                    <Input type="number"></Input>
                </Label>
                <Label>Paciente:
                    <Input type="text"></Input>
                </Label>
                <Label>Sexo:
                    <Select>
                        <option value="#">Selecione</option>
                        <option value="Mulher Cis">Mulher Cis</option>
                        <option value="Homem Cis">Homem Cis</option>
                        <option value="Mulher Trans">Mulher Trans</option>
                        <option value="Homem Trans">Homem Trans</option>
                        <option value="Não-binario">Não-binario</option>
                        <option value="Não Informado">Prefiro não Responder</option>
                    </Select>
                </Label>
                <Label>Idade:
                    <Input type="number"></Input>
                </Label>
                <Label>PNE:
                    <Select>
                        <option value="#">Selecione</option>
                        <option value="sim ">Sim</option>
                        <option value="Homem Cis">Não</option>
                    </Select>
                </Label>
                <Label>DTipo:
                    <Input type="text"></Input>
                </Label>
                <Label>CID :
                    <Input type="text"></Input>
                </Label>
                <Label>Modo:
                    <Input type="text"></Input>
                </Label>
                <Label>Tipo Agendamento:
                    <Input type="text"></Input>
                </Label>
                <Label>Agenda:
                    <Input type="text"></Input>
                </Label>
                <Label>Aus:
                    <Input type="text"></Input>
                </Label>
                <Label>Disp:
                    <Input type="text"></Input>
                </Label>
                <Label>Des:
                    <Input type="text"></Input>
                </Label>
                <Label>Alta:
                    <Input type="text"></Input>
                </Label>
                <Label>Solicitante:
                    <Input type="text"></Input>
                </Label>
                <Label>Observação:
                    <Input type="text"></Input>
                </Label>
                <Label>Telefone:
                    <Input type="text"></Input>
                </Label>
                <Label>Prontunário:
                    <Input type="text"></Input>
                </Label>

            </form>
        </Container>
    )
}