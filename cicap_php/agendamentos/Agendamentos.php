<?php

include_once '../conexao/Conexao.php';

class Agendamentos extends Conexao{

    public $connect;
    public $dados;
    public $id;

    public function cadastrarAgendamento($dados)
    {
        $conn = new Conexao();
        $this->connect = $conn->conectar();

        $query_cadagendamentos = "INSERT INTO agendamentos
        (dia_hora_agendamento, modo, tipo, observacao_agendamentos, id_hospital, id_medico, id_paciente) 
        VALUES ('2020-10-29','01','teste','observacao',1,1,1)";
        

        $cad_agendamentos = $this->connect->prepare($query_cadagendamentos);
        //$cad_agendamentos->bindParam(':modo', $dados['agendamento']['modo']);
        //$cad_agendamentos->bindParam(':tipo', $dados['agendamento']['tipo']);
        //$cad_agendamentos->bindParam(':observacao_agendamentos', $dados['agendamento']['observacao_agendamentos']);
        //$cad_agendamentos->bindParam(':id_hospital', $dados['agendamento']['id_hospital']);
        //$cad_agendamentos->bindParam(':id_medico', $dados['agendamento']['id_medico']);
        //$cad_agendamentos->bindParam(':id_paciente', $dados['agendamento']['id_paciente']);

        $cad_agendamentos->execute();

        if ($cad_agendamentos->rowCount()) {
            return "Cadastro Realizado com Sucesso";
        } else {
            return "Cadastro Não Realizado";
        }
    }


    public function listarAgendamentos() {

        $conn = new Conexao();
        $this->connect = $conn->conectar();

        $query_list = 'SELECT * FROM hospital';
        $result_list_agendamentos = $this->connect->prepare($query_list);
        $result_list_agendamentos->execute();

        if(($result_list_agendamentos) and ($result_list_agendamentos->rowCount() !=0 )){
            while ($result_agendamentos = $result_list_agendamentos->fetch(PDO::FETCH_ASSOC)) {
                extract($result_agendamentos);
                $lista_agendamentos[$id_hospital] = [
                    'id_hospital' => $id_hospital,
                    'nome_hospital' => $nome_hospital
                ];
            }
            http_response_code(200);
            echo json_encode($lista_agendamentos);
        }
    }
}