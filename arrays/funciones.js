{
var vectorglobal=[];
var vectorglobal1=[];
}

function ingresarvector()
{
    // alert("ingresar y modificar")
    console.log ("funcion ingresar y modificar")
 
    var subindice=0;

    while (subindice<3)
    {

    vectorglobal[subindice]=prompt("ingrese nombres"+ subindice)
    vectorglobal1[subindice]=prompt("ingrese edad"+ subindice)
  
    subindice=subindice+1
     
    }
    console.log(vectorglobal);
    console.log(vectorglobal1);
    document.getElementById("F1C1").innerHTML=vectorglobal.join("<br>");
    document.getElementById("F1C2").innerHTML=vectorglobal1.join("<br>");

}
function modificar()
{
    var subindice=0;

    console.log("funcion modificar")//
    console.log(vectorglobal);
    console.log(vectorglobal1);
    subindice=prompt("ingrese el subindice a modificar")
    vectorglobal[subindice]=prompt("ingrese el nombre"+subindice)
    vectorglobal1[subindice]=prompt("ingrese la edad"+subindice)
    console.log(vectorglobal);
    console.log(vectorglobal1);
    document.getElementById("F1C1").innerHTML=vectorglobal.join("<br>");
    document.getElementById("F1C2").innerHTML=vectorglobal1.join("<br>");


}