function mostrar()
{
	//tomo la edad  
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (!(edad >= 13 && edad <= 17)) {
		alert("Usted no es adolecente")
	}
}
//FIN DE LA FUNCIÓN