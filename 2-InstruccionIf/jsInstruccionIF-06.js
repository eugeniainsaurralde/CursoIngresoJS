function mostrar()
{
	//tomo la edad  
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad>=13 && edad<=17) {alert ("Usted es adolecente")} 
	    if (edad<13) {alert("Usted es un niño")}
	else {alert ("Usted es un adulto")};



}//FIN DE LA FUNCIÓN