<?php
include("conexion.php");
$conectar = conectar();
$tdoc = $_POST["tdoc"];
$numb = $_POST["numb"];
$contra = $_POST["contra"];

//echo $tdoc,$ndocu,$nombre,$fnaci,$correo,$direccion,$numcont,$contra;

$sentencia = "INSERT INTO iniciarsesion (tdoc,numb,contra) VALUES ('" . $tdoc . "','" . $numb . "','" . $contra . "')";
mysqli_query($conectar, $sentencia) or die("NO SE LOGRA INSERTAR LOS DATOS" . mysqli_error($conectar));

?>
