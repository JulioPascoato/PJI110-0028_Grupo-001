import React, {useState} from "react";
import { MenuHeader } from "../menu/menuHeader";
import { Container, Row, Col, Form, Button} from "react-bootstrap";
import {Helmet} from "react-helmet";



              
function converter() {
    let selectedFile;    
    document.getElementById('input').addEventListener("change", (event) => {
        selectedFile = event.target.files[0];
    })

    document.getElementById('button').addEventListener("click", () => {
        if (selectedFile){
            let fileReader = new FileReader();
            fileReader.readAsBinaryString(selectedFile);
            fileReader.onload = (event) => {
                
                let data = event.target.result
                let workbook = XLSX.read(data, {type:"binary"});
                workbook.SheetNames.forEach(sheet => {
                    let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
                    document.getElementById("jsondata").innerHTML=JSON.stringify(rowObject,undefined,3);

                });
            }
        }
    });
    
}

export const FormColetivo = () => {
    return(
    <Container fluid>

        <MenuHeader />
        
        <Container>
           <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Col sm="12">
                     <input type="file" id="input" accept=".xls,.xlsx"></input>
                     <Form.Text className="text-muted">
                         Selecionar arquivos com extensão .xls / .xlsx.
                     </Form.Text>
                    </Col>
                    
                </Form.Group>
                    <Button variant="primary" type="submit" id="button" onClick={converter}> Cadastrar</Button>
            </Form>

            
        </Container>
    <pre id="jsondata"></pre>
    </Container>
    )
}