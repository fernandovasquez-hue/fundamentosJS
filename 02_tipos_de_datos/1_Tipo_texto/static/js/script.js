console.log("conexion con js correcta...");
/*
Dato: Tipo de texto(string)
Concatenacion de texto con el signo +
Podemos unir texto y variables
*/
//concatennación: unir texto y/o variables.
const nombre = "Fernando";
const apellido = "Vásquez";
//unimos ambas constantes con un texto extra.
console.log("Hola, mi nombre es: " + nombre + " " + apellido);

/*
2.- Ver el tipo de dato (typeof)
*/
console.log("La variable nombre es untipo de dato:" + typeof nombre);

// Temple literals (forma moderna para concatenar)``
console.log(`hola, mi nombre es: ${nombre} ${apellido}`);

//Mostrar el largo de un string(texto) - Contar los caracteres.
// .lenth --> Para contar caracteres y espacios.
let palabra = "paralelepipedo"
console.log(`la palabra ${palabra} tiene ${palabra.length} letras.`);

//Crear una frase y contar sus caracteres.
let frase = "cuando yo estaba jugando me cai XD"
console.log(`la frase ${frase} y tiene ${frase.length} caracteres.`)

//Metodos comunes en JS para formatear texto
// Transformar texto en mayúsculas .toUpperCase()
let texto1 = "JAVAsCRipT eS Lo mEJoR";
console.log(texto1.toUpperCase());

//Tranformar texto en minusculas .toLowerCase
console.log(texto1.toLowerCase());

//Buscar un texto dentro de un string .includes()
let texto2 = "leche, azurcar, peras, huevos, harina";
console.log(texto2.includes("peras"))//true

//Convertir una variable a texto
let telefono = 89182920;
let telefono_texto = String(telefono);
console.log(` Mi número de teléfono ${telefono_texto} es de tipo ${typeof telefono_texto}`)