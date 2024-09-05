let num5 = parseInt(prompt("Ingrese el primer numero"));
let num6 = parseInt(prompt("Ingrese el segundo numero"));
let num7 = parseInt(prompt("Ingrese el tercer numero"));


if(num5 <= num6 && num5 <= num7){
    document.write("Respuesta segundo punto: El menor de los 3 numeros es: " +num5);
} else if(num6 <= num5 && num6 <= num7){
    document.write("Respuesta segundo punto: El menor de los 3 numeros es: " +num6);
}else {document.write("Respuesta segundo punto: El menor de los 3 numeros es: " +num7);    
}
