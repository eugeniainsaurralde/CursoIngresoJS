/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {// Declaracion variables
    let precio1;
    let precio2;
    let precio3;
    let suma
    // Leo los datos
    precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    // Realizo la operacion
    suma = (precio1 + precio2 + precio3);
    // Muestro el resultado
    alert("La suma es " + suma);

}
function Promedio() {// Declaracion variables
    let precio1;
    let precio2;
    let precio3;
    let promedio;
    // Leo los datos
    precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    // Realizo la operacion
    promedio = (precio1 + precio2 + precio3) / 3;
    // Muestro el resultado 
    alert("El promedio es " + promedio);


}
function PrecioFinal() {// Declaracion variables
    let precio1;
    let precio2;
    let precio3;
    let suma;
    let iva;
    let preciofinal;
    // Leo los datos
    precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    // Realizo la operacion
    suma = precio1 + precio2 + precio3;
    iva = 21 * suma / 100;
    preciofinal = iva + suma;
    // Muestro resutado
    alert("El precio final es " + preciofinal);

    /* ¿Como puedo hacer para no tener que declarar la variable suma en 
    el ultimo tramo de codigo? y poder utilizar la variable ya declarada en la
    primer porcion de codigo */


}