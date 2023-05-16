<?php
function conectar(){

$servidor ="localhost";
$usuario ="root";
$contra = "";
$db = "baguettedb";

$conexion = mysqli_connect($servidor,$usuario,$contra,$db) or die("no se logro la conexion");
echo"Conectado";
return $conexion;
}

function desconectar($conexion){
    mysqli_close($conexion);
}
