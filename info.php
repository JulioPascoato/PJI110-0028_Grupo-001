<?php

$con = new mysqli('localhost', 'root', 'Ferzerbmaz2014#', 'sakila');

if ($con->connect_error) {
    die("Failed to connect to the database: " . $con->connect_error);
}

echo "Connection to the database was successful";

?>
