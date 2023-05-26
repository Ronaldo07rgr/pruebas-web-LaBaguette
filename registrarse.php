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


$sentencia = "INSERT INTO cliente (tdoc,ndocu,nombre,fnaci,correo,direccion,numcont,contra) VALUES ('".$tdoc."','".$ndocu."','".$nombre."','".$fnaci."','".$correo."','".$direccion."','".$numcont."','".$contra."')";
mysqli_query($conectar,$sentencia) or die ("NO SE LOGRA INSERTAR LOS DATOS".mysqli_error($conectar));


echo "<script type='text/javascript'>alert('REGISTRO EXISTOSO');</script>";
echo"<div class='alert alert-success' role='alert'>
<h4 class='alert-heading'>Well done!</h4>
<p>Aww sí, leíste con éxito este importante mensaje de alerta. Este texto de ejemplo se extenderá un poco más para que pueda ver cómo funciona el espaciado dentro de una alerta con este tipo de contenido.</p>
<hr>
<p class='mb-0'>Siempre que lo necesite, asegúrese de usar utilidades de margen para mantener las cosas ordenadas y ordenadas.</p>
</div>";



?>