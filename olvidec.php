
<?php
include("conexion.php");
$conectar =conectar();
$codigo = $_POST["codigo"];


$sentencia = "INSERT INTO recuperacion (codigo) VALUES ('$codigo')";
mysqli_query($conectar,$sentencia) or die ("NO SE LOGRA INSERTAR LOS DATOS".mysqli_error($conectar));
echo"<html lang='en'>
<head>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <link rel='stylesheet' href='./assets/css/olvidecontraseña/olvideContraseña.css'>
</head>
<body>
<div class='overlay' id='overlay'>
    <div class='popup' id='popup'>
        <div class='lol'>
            <p>Para proteger tu cuenta, se quiere verificar que eres tu quien esta
                intentando iniciar sesion</p>
        </div>

        <div class='bo'>
            <label for='mensaje'>Digite en codigo enviado</label>
            <input type='number' id='number'>
        </div>
        <div class='sec'>
            <button class='bot'><a href='./cambiarContraseña.html'><b>Siguiente</b></a> </button>
            <button class='bot'><a href='./olvideContraseña.html'><b>Volver</b></a> </button>
        </div>
    </div>
</div>
</body>
</html>";
?>
