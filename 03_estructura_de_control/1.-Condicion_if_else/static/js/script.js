console.log("conexion con js correcta...");

/*
===========================
¿Qué es una condición?
===========================
Una condición nos permite tomar decisiones enel
código. Separando dos caminos el si(if)y el no(else)

Estructura básica:( Sintáxis  --> Reglas del lenguaje de programación)

if (condicion) {
    //código que se ejecuta si la condición es verdadera.
} else{
    //código que se ejecuta si la condición es falsa
}
*/

//Ejemplo 1: (numérico) -- IF
let edad = 18;

if(edad == 20){ //Condición Si
    console.log("Eres mayor de edad");
}

//Ejemplo 2:Dos caminos posibles
let temperatura = 21;

if(temperatura > 20){ //Condición SI
    console.log("Hace calor")
} else { //Condición NO
    console.log("Hace frio")
}

//Ejemplo 3; IF - ELSE IF - ELSE (Multiples condiciones)

let nota = 3.5;

if(nota >= 6.0){ //Primera condición
    console.log("Excelente! sigue así!");
}else if(nota >= 5.0){  //Segunda condición
    console.log("Aprobado, puedes mejorar!");
}else{ //Valor si no se cumple anteriores
    console.log("Desaprobado, estudia más!");
}

// Ejemplo 4: Condiciones con STRING
let nombre = "Agatha";

//COmparación exacta (===)
if(nombre = "agatha"){
    console.log(`hola, ${nombre}`);
} else{
    console.log(`Tu no eres ${nombre}`);
}

/* 
OPERADODES DE COMPARACIÓN

> mayor que
< menor que
>= mayor o igual
<= menor o igual
=== estricta igualdad
!== distinto estricto
!= distinto estricto
== igualdad
!= distinto
*/
//Ejemplo de distinto
let num = 10;
let num2 = 5;
if(num !== num2){
    console.log(`El número: ${num} es distinto que ${num2}`);
} else{
    console.log(`Son iguales!`)
}