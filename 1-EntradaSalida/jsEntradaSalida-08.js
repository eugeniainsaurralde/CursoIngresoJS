/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
	{ // declaracion de variables
	let dividendo;
	let divisor;
	let resto;
	// levanto los datos de las cajas de texto
	dividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	divisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);
	// realizo la operacion
	resto = dividendo % divisor;
	// muestro los resultados 
	alert("El resto es " + resto);
}
