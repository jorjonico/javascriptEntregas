/* Declaración de Variables "Let" para los números ingresados por el usuario, 
y constante para el valor fijo 5 que corresponden a 5 materias */
let num1, num2, num3, num4, num5
const num6 = 5

//Función flecha, "suma", que suma todas las calificaciones correctas ingresadas mediante prompt
const suma = (num1, num2, num3, num4, num5) => num1 + num2 + num3 + num4 +num5

//ciclo do/while con los prompt de calificaciones ingresadas por el usuario
do{ 
    num1 = parseFloat(prompt("Ingresar nota final de la materia HISTORIA"));
    num2 = parseFloat(prompt("ingresar nota final de la materia GEOGRAFÍA"));
    num3 = parseFloat(prompt("ingresar nota final de la materia LENGUA"));
    num4 = parseFloat(prompt("ingresar nota final de la materia MATEMÁTICAS"));
    num5 = parseFloat(prompt("ingresar nota final de la materia FÍSICA"));

    //Mensajes para el usuario, respetando las condicionales, en caso de ingresar números invalidos
    if ((isNaN(num1)) || (isNaN(num2)) || (isNaN(num3)) || (isNaN(num4)) || (isNaN(num5))){
        alert("Por favor ingresar números válidos")
    } 
    if((num1 <=0 || num1 >10) || (num2 <=0 || num2 >10) || (num3 <= 0 || num3 >10) || (num4 <= 0 || num4 >10) || (num5 <= 0 || num5 >10)){
        alert("Las calificaciones correctas son de 1 a 10")
    }
/*Condicionales, repite el ciclo hasta que den un numero valido
no puede ser Menor = a 0 / Mayor a 10 / y si no es un número (isNaN)*/
}while((isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)) || ((num1 <=0 || num1 >10) || (num2 <=0 || num2 >10) || (num3 <=0 || num3 >10) || (num4 <= 0 || num4 >10) || (num5 <= 0 || num5 >10)))

//Declaración de variable "resultado" que toma el retorno (return) llamando la función "suma"
let resultado = suma(num1, num2, num3, num4, num5)

//Función flecha, "division", que toma la variable resultado y la divide por la const "num6"
const division = (resultado, num6) => resultado / num6

/* Declaración de variable "promedio" que toma el retorno (return) de la función "division"
y sale por alert con un texto concatenado con el promedio del alumno*/
let promedio = division(resultado, num6)
alert (`El promedio del alumno ingresado es de ${promedio} puntos`)