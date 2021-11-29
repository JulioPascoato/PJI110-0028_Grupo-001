import React, { Component } from 'react';
import XLSX from 'xlsx';
import { make_cols } from '../utils/MakeColumns';
import { Container, Row, Col, Button} from "react-bootstrap";

class ExcelReader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: {},
      data: [],
      cols: []
    }
    this.handleFile = this.handleFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(e) {
    const files = e.target.files;
    if (files && files[0]) this.setState({ file: files[0] });
  };
 
  handleFile() {
    /* Boilerplate to set up FileReader */
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;
 
    reader.onload = (e) => {
      /* Parse data */
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array', bookVBA : true });

      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];

      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws);      

      /* Update state */
      this.setState({ data: data, cols: make_cols(ws['!ref']) }, () => {
        console.log(JSON.stringify(this.state.data, null, 2));
      });

      
     };
 
    if (rABS) {
      reader.readAsBinaryString(this.state.file);
    } else {
      reader.readAsArrayBuffer(this.state.file);
    };
  }
  agendamento(cadAgendamento) {
     cadAgendamento = async e => {
      e.preventDefault();
      
      await fetch("http://localhost/dashboard/cicap_php/agendamentos/cadastrar_agendamentos.php", {
        method: "POST",
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(this.state.data, null, 2)
      })
      .then((response) =>response.json())
       .then((responseJson) => {
         if (responseJson.erro) {
           console.log("erro")
         } else {
            alert("sucesso");
         }
       }).catch(() => {
  
       })
    }
  }
  
 
  render() {
    return (


      
    <Container fluid="lg">
        <Row>
          <Col xs={12} md={6}><input type="file" className="form-control" id="file" accept=".xls,.xlsx" onChange={this.handleChange} />
          <label htmlFor="file">Selecionar um arquivo com extensão .xls ou.xlsx</label></Col>
        </Row>
        <Row>
          <Col xs={12} md="12">
            <Button variant="dark" type='submit' value="Process Triggers" onClick={this.handleFile} onSubmit={this.agendamento}> Cadastrar</Button>
            </Col>
        </Row>
        </Container>

   
      
    )
  }
}
 
export default ExcelReader;