<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

require './Agendamentos.php';

$listar = new Agendamentos();
$listar->listarAgendamentos();