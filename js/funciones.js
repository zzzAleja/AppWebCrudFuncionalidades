function calculovelocidad()
{
    console.log("FUNCION VELOCIDAD");
    var distancia=document.getElementById("dgd").value;
    var tiempo=document.getElementById("dth").value;

    console.log(distancia);
    console.log(tiempo);

    velocidad= distancia/tiempo;
    alert("la velocidad es" +velocidad+"km/h")
    
}
function calcularedad()
{
    console.log("FUNCION EDAD")
    var nacimiento=document.getElementById("nacimiento").value;

    console.log(nacimiento)
    edad=2022-nacimiento
    alert("la edad es"+edad)
}