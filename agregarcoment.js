function agregarComent(){

var capa = document.getElementById("almacen_de_comentario");
var nombre =document.createElement("p");
nombre.addClassName("text");
nombre.innerHTML ="Nombre:";

var contNombre=document.createElement("input")
var name=document.getElementById("nombreComnt").value;
contNombre.value= name;
contNombre.setAttribute('readonly','readonly');

var comnt =document.createElement("p");
comnt.addClassName("text");
comnt.innerHTML ="Comentario:";

var contComnt=document.createElement("textarea");
var comentario =document.getElementById("coment").value;
contComnt.value= comentario;
contComnt.readOnly=true;

capa.appendChild(nombre);
capa.appendChild(contNombre);
capa.appendChild(comnt);
capa.appendChild(contComnt);
limpiar();
readonly();
}
function limpiar(){
document.getElementById("nombreComnt").value="";
document.getElementById("coment").value="";
}
function readonly(){


}