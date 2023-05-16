<?php
include("conexion.php");
$conectar =conectar();
$name=$_POST["nombre"];
$apellido=$_POST["apellido"];
$correo=$_POST["correo"];
$mensaje=$_POST["mensaje"];

$sentencia = "INSERT INTO contactos (nombre,apellido,correo,mensaje) VALUES ('".$name."','".$apellido."','".$correo."','".$mensaje."')";
mysqli_query($conectar,$sentencia) or die ("NO SE LOGRA INSERTAR LOS DATOS".mysqli_error($conectar));
echo"<div class='alert alert-success' role='alert'>
<h4 class='alert-heading'>Well done!</h4>
<p>Aww sí, leíste con éxito este importante mensaje de alerta. Este texto de ejemplo se extenderá un poco más para que pueda ver cómo funciona el espaciado dentro de una alerta con este tipo de contenido.</p>
<hr>
<p class='mb-0'>Siempre que lo necesite, asegúrese de usar utilidades de margen para mantener las cosas ordenadas y ordenadas.</p>
</div>";

?>
