/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {// declaracion de variables
	let numero1;
	let numero2;
	let suma;
	// levanto los datos de las cajas de texto
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	// realizo la operacion
	suma = numero1 + numero2;
	// muestro los resultados 
	alert("la suma es " + suma)

}

