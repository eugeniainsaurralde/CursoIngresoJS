/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
	//Declaro las variables 
	let importe;
	let descuento;
	let nuevoimporte;
	//Leo el importe desde la caja de texto y la transformo a entero
	importe = parseInt(document.getElementById("txtIdImporte").value);
	//definir el descuento
	descuento = (25 * importe / 100);
	//Definir el nuevo importe
	nuevoimporte = (importe - descuento);
	//Mostrar el resultado
	document.getElementById("txtIdResultado").value = nuevoimporte;

}
