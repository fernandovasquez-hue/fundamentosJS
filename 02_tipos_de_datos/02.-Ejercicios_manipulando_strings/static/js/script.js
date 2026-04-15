console.log("conexión correcta con js");

// 1️⃣ Presentación completa
// Crea las variables:
// nombre: Camila
// edad: 25
// Debes mostrar un mensaje que:
// Presente a la persona
// Indique su edad
// Indique el tipo de dato de edad
// 👉 Todo en un solo mensaje.
let nombre = "camila";
let edad = 25;
let edad_texto = String(edad);
console.log(`esta es ${nombre} y tiene ${edad} \nTipo de dato (edad) es: ${typeof edad}`);

// 2️⃣ Ubicación con transformación
// Crea las variables:
// comuna: Maipú
// region: Metropolitana
// Debes mostrar un mensaje que:
// Indique dónde vive la persona
// Muestre la comuna en MAYÚSCULAS
// Muestre la región en minúsculas
let comuna = "Maipú";
let region = "Metropolitana";
console.log(`esta persona vive en la comuna de ${comuna.toUpperCase()} en la region ${region.toLowerCase()}`);

// 3️⃣ Análisis de palabra
// Crea la variable:
// lenguaje: Python
// Debes mostrar un mensaje que:
// Indique cuántos caracteres tiene
// Muestre la palabra en MAYÚSCULAS
// Indique el tipo de dato
let lenguaje = "Python";
console.log(`${lenguaje.toUpperCase()} y tiene ${lenguaje.length} letras \nTipo de dato (lenguaje) es: ${typeof lenguaje}`);

// 4️⃣ Frase completa analizada
// Crea la variable:
// mensaje: Me encanta programar en JavaScript
// Debes mostrar un mensaje que:
// Indique la cantidad de caracteres
// Verifique si contiene la palabra "JavaScript"
// Muestre el mensaje completo en minúsculas
let mensaje = "Me encanta programar en JavaScript";
console.log(`el mensaje ${mensaje.toLowerCase()} tiene ${mensaje.length}`);
console.log(mensaje.includes("JavaScript"));

// 5️⃣ Lista con búsqueda y transformación
// Crea la variable:
// compras: arroz, fideos, aceite, sal
// Debes mostrar:
// Si existe la palabra "aceite"
// El texto completo en MAYÚSCULAS
// La cantidad total de caracteres
let compras = "arroz, fideos, aceite, sal";
console.log(`la lista de compras es ${compras.toUpperCase()} y tiene ${compras.length} caracteres`);
console.log(compras.includes("aceite"));

// 6️⃣ Conversión + análisis
// Crea las variables:
// numeroCasa: 456
// numeroCasaTexto (vacía)
// Debes:
// Convertir el número a texto
// Mostrar el número convertido
// Indicar su tipo de dato
// Indicar cuántos caracteres tiene
let numeroCasa = 456;
let numeroCasaTexto = String(numeroCasa);
console.log(`Su numero de casa es ${numeroCasaTexto} que tiene ${numeroCasaTexto.length} numeros \nTipo de dato (numeroCasaTexto) es: ${typeof numeroCasaTexto}`);

// 7️⃣ Identificación personal extendida
// Crea las variables:
// nombre: Diego
// apellido: Rojas
// Debes mostrar un mensaje que:
// Muestre el nombre completo
// Indique cuántos caracteres tiene el nombre completo (incluyendo espacio)
// Muestre todo en MAYÚSCULAS
let nombre1 = "Diego";
let apellido = "Rojas";
let nom_y_apellido = "Diego Rojas";
console.log(`El se llama ${nombre1.toUpperCase()} ${apellido.toUpperCase()} y tiene ${nom_y_apellido.length} caracteres`);

// 8️⃣ Verificación de contenido
// Crea la variable:
// frase: Hoy aprenderemos sobre strings
// Debes mostrar:
// Si contiene la palabra "strings"
// La frase en MAYÚSCULAS
// La cantidad de caracteres
let frase = "Hoy aprenderemos sobre strings";
console.log(`la frase ${frase.toUpperCase()} tiene ${frase.length} caracteres`);
console.log(frase.includes("strings"));

// 9️⃣ Comparación de formatos
// Crea la variable:
// texto: Programar es divertido
// Debes mostrar en un solo mensaje:
// El texto original
// El texto en minúsculas
// El texto en mayúsculas
// La cantidad de caracteres
let texto = "Programar es divertido"
console.log(` el texto original es ${texto}, en minusculas es ${texto.toLowerCase()} y en mayúsculas es ${texto.toUpperCase()}`);

// 🔟 Desafío completo integrado
// Crea las variables:
// curso: 4C
// anio: 2026
// Debes mostrar un mensaje que:
// Indique el curso y año
// Convierta el año a texto
// Indique el tipo de dato del año convertido
// Muestre todo el mensaje en MAYÚSCULAS
let curso = "4C";
let año = 2026;
let año_texto = String(año);
let Mensaje_completo = "este es el curso ${curso} y el año ${año_texto} \nTipo de dato (año_texto) es:";
console.log(`este es el curso ${curso} y el año ${año_texto} \nTipo de dato (año_texto) es: ${typeof año_texto}`.toUpperCase());
