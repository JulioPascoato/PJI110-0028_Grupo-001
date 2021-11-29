<?php

    //CABEÇALHOS OBRIGATÓRIOS

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods:GET,PUT,POST, DELETE");
    header("Access-Control-Allow-Headers: *");

    require './Agendamentos.php';

    $response_json = file_get_contents("php://input");

    $dados = json_decode($response_json,true);

    if ($dados) {
        
            $cadAgendamento = new Agendamentos();
            $cadAgendamento->cadastrarAgendamento($dados);  

            $response = [
                "erro" => false,
                "mensagem" => "Agendamento cadastrado!"  
            ];
           
    } else {
        $response = [
            "erro" => true,
            "mensagem" => "Agendamento não cadastrado!"  
        ];
    }

    http_response_code(200);
    echo json_encode($response);
