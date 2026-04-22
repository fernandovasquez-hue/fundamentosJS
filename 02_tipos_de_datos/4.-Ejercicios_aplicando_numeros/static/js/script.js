console.log("conexion con js correcta...");
// 🔹Ejercicio 1: Edad proyectada
// Declara tu edad actual y calcula:
// Tu edad en 5 años
// Tu edad hace 10 años
// Muestra ambos resultados en alert.
function edadProyectada(){
let edad = 16;
alert(`Mi edad es: ${edad} 
    \nEn 5 años tendré: ${edad + 5}
    \nHace 10 años tenía: ${edad - 10}`);
}

// 🔹 Ejercicio 2: Compra con descuento
// Un producto cuesta $25.000 y tiene un descuento del 20%.
// Calcula el precio final
// Muestra el resultado
function compraDescuento(){
let precio = 25000;
alert(`El precio es de $${precio}
    \nEl descuento es de 20% que seria: $${precio * 0.20}
    \nEl precio final con el descuento seria de: $${precio - ( precio * 0.20)}`);
};

// 🔹 Ejercicio 3: Promedio de notas
// Declara 3 notas decimales:
// Calcula el promedio
// Redondea el resultado usando Math.round()
function promedioNota(){
let nota1 = 6.5;
let nota2 = 4.3;
let nota3 = 7.0;
alert(`Estan son las notas que se sacaron ${nota1}, ${nota2}, ${nota3}
    \nY el promedio es de: ${(nota1 + nota2 + nota3) / 3} 
    \nY se redondeado seria: ${Math.round((nota1 + nota2 + nota3) / 3)}`);
};

// 🔹 Ejercicio 4: Temperatura
// Declara una temperatura actual en grados Celsius:
// Auméntala en 3 grados
// Luego disminúyela en 5 grados
// Muestra el resultado final
function calcularTemperatura(){
let temperatura = 23;
alert(`La temperatura de ahora es de: ${temperatura}°C
    \nPero si le agregados 3 grados mas seria: ${temperatura + 3}°C
    \nY si ese resultado le quitamos 5 grados queda en: ${temperatura - 5}°C`);
};

// 🔹 Ejercicio 5: Sueldo semanal
// Un trabajador gana $8.000 por hora y trabaja 45 horas:
// Calcula su sueldo
// Si trabaja 5 horas extra, agrégalas usando incremento
// Muestra el nuevo sueldo
function calcularSueldo(){
let horas = 45;
let pagado = 8000;
alert(`Su sueldo por cada hora pagada a 8.000 y trabajando 45 horas son: ${horas * pagado}
    \nPero si el trabaja 5 horas extra seria su sueldo de: ${(horas += 5) * pagado}`);
};

// 🔹 Ejercicio 6: División y resto
// Declara dos números:
// Calcula la división
// Calcula el módulo (%)
// Explica el resultado en alert
function divisionModulo(){
let num1 = 5;
let num2 = 3;
alert(`Si yo divido el 5 entre el 3 da como resultado: ${num1 / num2}
    \nEl resto de esa division seria ${num1 % num2}
    \nPude saber cuanto era el sobrante calculando modulo que te dice lo que sobra en una división`);
}

// 🔹 Ejercicio 7: Comparación de números
// Declara dos números:
// Muestra si el primero es mayor que el segundo
// Verifica si uno de ellos es igual a 10
function compararNumeros(){
let num3 = 10;
let num4 = 4;
alert(`Número 10 es mayor que el 4: ${num3 > num4}
    \nEl primer número es igual a 10: ${num3 === 10}`);
} 

// 🔹 Ejercicio 8: Notación científica aplicada
// Declara:
// Una población usando notación científica (ej: 1e6)
// Divide esa población en 4 grupos
// Muestra el resultado
function notacionCientifica(){
let poblacion = 1e7;
alert(`Hay un pueblo que tiene una población de: ${poblacion}
    \nSi dividimos en oueclo en 4 seria: ${poblacion / 4}`);
} 

// 🔹 Ejercicio 9: Potencia y cálculo combinado
// Calcula:
// 3 elevado a 4
// Luego multiplícalo por 2
// Resta 10 al resultado final
function problemaCombinado(){
let num5 = 3;
alert(`Si elevamos 3 a 4 seria: ${3 ** 4}
    \nDespues a ese resultado lo multiplicamos por 2 seria: ${3 ** 4 * 2}
    \nPor ultimo a eso le restamos 10 quedaria ${3 ** 4 * 2 - 10}`)
} 

// 🔹 Ejercicio 10: Dado aleatorio 🎲
// Simula el lanzamiento de un dado:
// Genera un número entre 1 y 6
// Muestra el resultado
// Indica si el número es mayor o igual a 4 (gana) o menor (pierde)
function lanzarDado(){
let dado = Math.floor(Math.random() * 6) + 1;
alert(`Tiramos dado y sale: ${dado}
    \nEl número es mayor o igual que 4: ${dado >= 4}`)
}