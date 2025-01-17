let nombre = prompt("Por favor ingresa tu nombre completo:");
let edad = prompt("Ahora ingresa tu edad:");
let lenguaje = prompt("Por ultimo dejame saber tu lenguaje de programación favorito:");

alert (`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);

let opcion = prompt("¿Te gusta estudiar [lenguaje]? Responde con el número 1 para SÍ o 2 para NO.")

if(opcion=1){
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.")
}else{
    alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?")
}
