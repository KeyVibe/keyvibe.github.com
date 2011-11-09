var miTabla = 'tabla'; 
function iniciarTabla() {
 	var tab = document.getElementById(miTabla);
  var filas = tab.getElementsByTagName('tr');
  for (i=1; fil = filas[i]; i++) {
	var celdas = fil.getElementsByTagName('td');
    for (j=1; cel = celdas[j]; j++) {
		if(j==1){
			cel.onclick = function() {crearInput(this)}
		} 
    } 
  } 
}
// crear input para editar datos
function crearInput(celda) {
  celda.onclick = function() {return false}
  var txt = celda.innerHTML;
  celda.innerHTML = '';
  var obj = celda.appendChild(document.createElement('input'));
  obj.value = txt;
  obj.focus();
  obj.onblur = function() {
    txt = this.value;
    celda.removeChild(obj);
    celda.innerHTML = txt;
    celda.onclick = function() {crearInput(celda)}  
	multiplicar();
  }
  
}

function multiplicar(){
	tab = document.getElementById(miTabla);
  filas = tab.getElementsByTagName('tr');
  sumTot=0;
  for (i=1, tot=filas.length; i<tot; i++) { 
    total = 1;
    celdas = filas[i].getElementsByTagName('td');
    for (j=1, to=celdas.length-1; j<to; j++) {
      num = parseFloat(celdas[j].innerHTML);
      if (isNaN(num)) num = 0;
      total *= num;
    } // end for j
    celdas[celdas.length-1].innerHTML = total;
	sumTot += total;
  } // end for i
	label = document.getElementById("sumtot");
	label.innerHTML = sumTot;
}