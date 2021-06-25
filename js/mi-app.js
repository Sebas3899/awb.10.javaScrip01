var Nombre="";
var Edad=0;
var Localidad="";
var Profesión="";
var Fecha=new Date();
var Horas=Fecha.getHours();
var mensaje="Bienvenidos "

if (Horas <= "12"){
    alert(mensaje+"Buenos Dias"+"\n"+ Fecha );
}
else if ((Horas >"12") || (Horas<="18")){
        alert(mensaje+"Buenas tardes"+"\n"+ Fecha);
}else if((Horas >"18") || (Horas<="23")){
    alert(mensaje+"Buenas noches"+"\n"+ Fecha);
}



nombre = prompt("¿Cual es tu nombre?");
edad = prompt("¿Cual es tu edad?");
localidad = prompt("¿Cual es tu localidad?");
profesion = prompt("¿Cual es tu profesión?");

var respuesta = confirm("¿Los datos son correctos?"+                           "\n Nombre:"+nombre+                           "\n Edad:"+edad+                           "\n Localidad:" +localidad+                           "\n Profecion:"+profesion);
if(respuesta){
document.writeln("<h1>Hola mundo desde JavaScript</h1>");
document.writeln("<center>");
document.writeln("<table border='1'>");
//renglon 1
    document.writeln("<tr>");
        // Col 1
        document.writeln("<td rowspan='4' width= '20%' >");
            document.writeln("Foto");
        document.writeln("</td>");
        // Col 2
        document.writeln("<td>");
            document.writeln("<b>Nombre: </b>"+nombre);
        document.writeln("</td>");
    document.writeln("</tr>");
  //Renglon 2  
    document.writeln("<tr>");
        //Col 1
        document.writeln("<td>");
            document.writeln("<b>Edad: </b>"+edad+" años");
        document.writeln("</td>");                
    document.writeln("</tr>");
  //Renglon 3  
    document.writeln("<tr>");
        //Col 1
        document.writeln("<td>");
            document.writeln("<b>Localidad: </b>"+localidad);
        document.writeln("</td>");
    document.writeln("</tr>");
   //Renglon 4 
    document.writeln("<tr>");
        //Col 1
        document.writeln("<td>");
            document.writeln("<b>Profecion: </b>"+profesion);
        document.writeln("</td>");
    document.writeln("</tr>");            
document.writeln("</table>");
document.writeln("</center>");


}else{
    alert("Gracias por visitarnos");
}

function CambiarNombre(){
    var ctNombre=document.getElementById("ctrl-Nombre");
    var Nombre=document.getElementById("Nombre");
    Nombre.innerHTML=ctNombre.value;
}