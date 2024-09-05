let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));
let num3 = parseInt(prompt("Ingrese el tercer numero"));
let num4 = parseInt(prompt("Ingrese el cuarto numero"));


if(num1 >= num2 && num1 >= num3 && num1 >= num4){
    document.write("Respuesta primer punto: El mayor de los 4 numeros es: " +num1);
} else if(num2 >= num1 && num2 >= num3 && num2 >= num4){
    document.write("Respuesta primer punto: El mayor de los 4 numeros es: " +num2);
}else if(num3 >= num1 && num3 >= num2 && num3 >= num4){
    document.write("Respuesta primer punto: El mayor de los 4 numeros es: " +num3);
}else {document.write("Respuesta primer punto: El mayor de los 4 numeros es: " + num4);}