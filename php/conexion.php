<?php

$servername="localhost";
$database="AlejaB";
$username="root";
$password="";



//crear conexion
$conn=mysqli_connect($servername,
$username,$password,$database);

//verificar conexion
if (!$conn) {
    die("connection failed:" . mysqli_connect());
}
else{
    //print"<p>connection succesful</p>\n";
    //header("location: ../index.html", TRUE,301);
}

?>