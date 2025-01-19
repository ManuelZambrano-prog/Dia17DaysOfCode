/*Debes crear un pequeño programa que comience con un valor específico predefinido entre 0 y 10 para el número que vas a adivinar (por ejemplo, el 7).

 

A continuación, el programa te preguntará cuál es el valor que deseas adivinar y, si aciertas, te felicitará. Si te equivocas, te dará 2 intentos más.

 

Al final, si no aciertas en ninguno de los intentos, imprimirá cuál era el número inicial.

 

Después de que el programa esté funcionando, intenta usar un número aleatorio en lugar de uno predefinido.*/
let rangoElegido= parseInt(prompt("Por favor indica el numero hasta el cual quieres tener como parango para adivinar:"));
let numeroSecreto = Math.floor(Math.random()*rangoElegido)+1;
let numeroUsuario= 0;
let intentos= 1;
let maximoIntentos =3;

while(numeroUsuario!=numeroSecreto){
    numeroUsuario= prompt(`Por favor ingresa un numero entre 1 y ${rangoElegido} :`);
    if(numeroUsuario==numeroSecreto){
        alert(`Felicidadessss acertaste, el numero secreto era: ${numeroUsuario} y lo adivinaste en: ${intentos} ${intentos == 1 ? "intento." : "intentos"}`);
    }
    else{
        if(numeroUsuario>numeroSecreto){
            alert("El numero secreto es menor.");
        }else{
            alert("El numero secreto es mayor");
        }
    intentos++;
    if(intentos>maximoIntentos){
    alert(`Lllegaste al numero maximo de intentos que era de ${maximoIntentos}`);
    break;
        }
    }
}
