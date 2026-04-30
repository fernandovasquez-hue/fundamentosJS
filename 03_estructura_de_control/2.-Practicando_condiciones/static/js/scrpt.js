console.log("conexion exitosa con js")

// EJERCICIO 1
// Resultado esperado en alert:
// "Bienvenido Juan"

function ejercicio1() {
    let nombre = "juan";
    alert(`bienvenido ${nombre}`)
}


// EJERCICIO 2
// Resultado esperado en alert:
// "La suma es: 15"

function ejercicio2() {
    let sum1 = 10;
    let sum2 = 5;
    let resultado = sum1 + sum2;
    alert(`El resultado de la suma es: ${resultado}`)
}


// EJERCICIO 3
// Resultado esperado en alert:
// "La resta es: 12"

function ejercicio3() {
    let res1 = 18;
    let res2 = 6;
    let resultado2 = res1 - res2;
    alert(`El resultadoo de la resta es: ${resultado2}`)
}


// EJERCICIO 4
// Resultado esperado en alert:
// "La multiplicación es: 24"

function ejercicio4() {
    let mun1 = 8;
    let mun2 = 3;
    let resultado3 = mun1 * mun2;
    alert(`El resultado de la muinltiplicacion es de: ${resultado3}`)
}


// EJERCICIO 5
// Resultado esperado en alert:
// "El promedio es: 5.7"

function ejercicio5() {
    let pro1 = 5.4;
    let pro2 = 6.0;
    let sumaNot = pro1 + pro2;
    let promedio = sumaNot / 2;
    alert(`El promedio da: ${promedio}`)
}


// EJERCICIO 6
// Resultado esperado en alert:
// "Es mayor de edad"

function ejercicio6() {
    let edad = 20;
    if (edad => 18) {
        alert(`eres mayor de edad`);
    } else {
        alert(`es menor de edad`);
    }
}


// EJERCICIO 7
// Resultado esperado en alert:
// "El número es par"

function ejercicio7() {
    let numero = 20;
    if (numero % 2 == 0) {
        alert(`el numero es par`);
    } else {
        alert(`EL numero es impar`);
    }
}


// EJERCICIO 8
// Resultado esperado en alert:
// "Estudiante aprobado"

function ejercicio8() {
    let not = 6.0;
    if (not >= 4.0) {
        alert(`Estudiante aprobado`);
    } else {
        alert(`Estudiante desaprobado`);
    }
}



// EJERCICIO 9
// Resultado esperado en alert:
// "Precio final con descuento: $18000"

function ejercicio9() {
    let Precioproducto = 20000;
    let descuento = 0.1;
    alert(`precio final con descuento ${(Precioproducto * descuento)}`)
}


// EJERCICIO 10
// Resultado esperado en alert:
// "El número mayor es: 22"

function ejercicio10() {
    let num1 = 22;
    let num2 = 5;
    if (num1 > num2) {
        alert(`El numero mayor es: ${num1}`);
    } else {
        alert(`El numero mayor es: ${num2}`);
    }
}

// EJERCICIO 11
// Resultado esperado en alert:
// `El estudiante Juan tiene nota 6.5 y su resultado es: Excelente rendimiento`

function ejercicio11() {
    let nota = 6.5;
    let nombre1 = "juan";
    if (nota >= 6.0) {
        alert(`El estudiante ${nombre1} tiene nota ${nota} y su resultado es: Excelente rendimiento`)
    } else if (nota >= 4.0) {
        alert(`El estudiante ${nombre1} tiene nota ${nota} y su resultado es: Aprobado`)
    } else {
        alert(`El estudiante ${nombre1} tiene nota ${nota} y su resultado es: Desaprobado`)
    }
}


// EJERCICIO 12
// Resultado esperado en alert:
// `El nombre convertido es: DANIEL PÉREZ y tiene 12 caracteres`

function ejercicio12() {
    let nombre2 = "Dainel Pérez";
    let nombreConve = nombre2.toUpperCase();
    alert(`El nombre convertido es: ${nombreConve} y tiene ${nombreConve.length} carcateres`);
}


// EJERCICIO 13
// Resultado esperado en alert:
// `El correo convertido es: ejemplo@gmail.com y el resultado es: correo válido`

function ejercicio13() {
    let correo = "ejemplo@gmail.com";
    if (correo >= 15){
        alert(`El correo convertido es: ${correo} y el resultado es: correo válido`);
    } else{
        alert(`El correo convertido es: ${correo} y el resultado es: correo inválido`);
    }
}


// EJERCICIO 14
// Resultado esperado en alert:
// `La frase "Estoy aprendiendo JavaScript" tiene 28 caracteres y corresponde a una frase larga`

function ejercicio14() {
    alert()
}


// EJERCICIO 15
// Resultado esperado en alert:
// `El producto TECLADO tiene un precio final de $45000`

function ejercicio15() {
    alert()
}