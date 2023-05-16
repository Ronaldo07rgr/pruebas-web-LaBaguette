<?php

include("conexion.php");
$conectar =conectar();
$tdoc=$_POST["tdoc"];
$ndocu=$_POST["ndocu"];
$nombre=$_POST["nombre"];
$fnaci=$_POST["fnaci"];
$correo=$_POST["correo"];
$direccion=$_POST["direccion"];
$numcont=$_POST["numcont"];
$contra=$_POST["contra"];

//echo $tdoc,$ndocu,$nombre,$fnaci,$correo,$direccion,$numcont,$contra;

$sentencia = "INSERT INTO cliente (tdoc,ndocu,nombre,fnaci,correo,direccion,numcont,contra) VALUES ('".$tdoc."','".$ndocu."','".$nombre."','".$fnaci."','".$correo."','".$direccion."','".$numcont."','".$contra."')";
$Resultl=mysqli_query($conectar,$sentencia) or die ("NO SE LOGRA INSERTAR LOS DATOS".mysqli_error($conectar));

if(!$Resultl){
echo "<script type='text/javascript'>alert('REGISTRO EXISTOSO');</script>";
//header('location:' . getenv('HTTP_REFERER'));

}

?>