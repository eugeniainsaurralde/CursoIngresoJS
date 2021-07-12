/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {
	// declaracion de variables 
	let sueldo;
	let aumento;
	let nuevosueldo;
	// leer el sueldo (caja de texto en html.)
	sueldo = parseInt(document.getElementById("txtIdSueldo").value);
    // calcular el aumento
	aumento = (10 * sueldo / 100);
	// sumo el aumento al sueldo original
	nuevosueldo = (aumento + sueldo);
	 // muestro el resultado 
	document.getElementById("txtIdResultado").value = nuevosueldo;
}




