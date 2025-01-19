/*Tu desafío de hoy es crear los destinos posibles de un juego, en el que el usuario pueda elegir:*/
/*let contadorPrincipal = 1;
let contadorSecundario = 1;
let area = prompt("Si quieres seguir por el area de Front-End, porfavor escribe :*Front*, pero si deseas seguir por el area de Back-End, por fdavor coloca la palabra clave: *Back* a continuación:");
let frontSection = 0;
let backSection = 0;
let reactSection = 0;
let vueSection = 0;
let cSection = 0;
let javaSection = 0;
let numeroTecnologias = 0;
let tecnologiasElegir = 0;


    if(area == "Front"){
        frontSection = prompt("Perfecto excelente elección, ahora es que quieres aprender en Front-End, React(Excelente elección) o Vue(Interesante):");
        if(frontSection== "React"){
            reactSection = prompt("React es una biblioteca muy popular para construir interfaces de usuario, y muchos desarrolladores la eligen por su eficiencia y flexibilidad. Pero tengo otra pregunta para ti, deseas seguir especializandote en esta area o deseas ser un desarrollador fullstack que combina tanto Front-End como Back-End, si deseas seguir especializandote porfavor escribe la palabra Si pero si quieres ser un programador fullstack marca como No:");
            if(reactSection == "Si"){
                numeroTecnologias = prompt("Ahora que ya sabes que quieres estudiar, por favor ingresa un numero con la cantidad de tecnologias que quieras aprender con estos cursos:");
                while(contadorSecundario!= numeroTecnologias){
                    tecnologiasElegir = prompt("Por favor indica las tecnologias que deseas aprender:");
                    contadorSecundario++;
                }
                alert(`Estas fueron las tecnologias que elegiste: ${tecnologiasElegir}, mucha suerte en tus estudios.`);
            }else{
                alert("Este valor no es valido");
            }
        }else if(frontSection == "Vue"){
            vueSection = prompt("Vue es un framework progresivo para construir interfaces de usuario. Es conocido por su simplicidad y flexibilidad, lo que lo convierte en una excelente opción tanto para principiantes como para desarrolladores experimentados.Pero tengo otra pregunta para ti, deseas seguir especializandote en esta area o deseas ser un desarrollador fullstack que combina tanto Front-End como Back-End, si deseas seguir especializandote porfavor escribe la palabra Si pero si quieres ser un programador fullstack marca como No:");
            if(vueSection == "Si"){
                numeroTecnologias = prompt("Ahora que ya sabes que quieres estudiar, por favor ingresa un numero con la cantidad de tecnologias que quieras aprender con estos cursos:");
                while(contadorSecundario!= numeroTecnologias){
                    tecnologiasElegir = prompt("Por favor indica las tecnologias que deseas aprender:");
                    contadorSecundario++;
                }
                alert(`Estas fueron las tecnologias que elegiste: ${tecnologiasElegir}, mucha suerte en tus estudios.`);
            }else{
                alert("Este valor no es valido");
            }
        }else{
            alert("Por favor recuerda que las palabras clave son *React* y *Vue*, intentalo de nuevo");
        }
    }
    else if(area == "Back"){
        backSection= prompt ("Es super interante esta elección, pero como decidiste ingresar al mundo del Back-End cual de estas dos opciones deseas aprender: C# o Java (Ambas son fundamentales en esta especialización)");
        if(backSection=="C#"){
            cSection = prompt("C# es un lenguaje de programación desarrollado por Microsoft que forma parte de su plataforma .NET. Es un lenguaje de propósito general, orientado a objetos y muy versátil, utilizado para desarrollar una amplia variedad de aplicaciones, desde aplicaciones de escritorio hasta aplicaciones web y móviles.Pero tengo otra pregunta para ti, deseas seguir especializandote en esta area o deseas ser un desarrollador fullstack que combina tanto Front-End como Back-End, si deseas seguir especializandote porfavor escribe la palabra Si pero si quieres ser un programador fullstack marca como No:");
            if(cSectionSection == "Si"){
                numeroTecnologias = prompt("Ahora que ya sabes que quieres estudiar, por favor ingresa un numero con la cantidad de tecnologias que quieras aprender con estos cursos:");
                while(contadorSecundario!= numeroTecnologias){
                    tecnologiasElegir = prompt("Por favor indica las tecnologias que deseas aprender:");
                    contadorSecundario++;
                }
                alert(`Estas fueron las tecnologias que elegiste: ${tecnologiasElegir}, mucha suerte en tus estudios.`);
            }else{
                alert("Este valor no es valido");
            }
        }else if( backSection=="Java"){
            javaSection = prompt("Java es un lenguaje de programación de propósito general, orientado a objetos y ampliamente utilizado en el desarrollo de software. Fue creado por Sun Microsystems (ahora parte de Oracle) y es conocido por su portabilidad, lo que significa que las aplicaciones escritas en Java pueden ejecutarse en diferentes plataformas sin necesidad de modificaciones.Pero tengo otra pregunta para ti, deseas seguir especializandote en esta area o deseas ser un desarrollador fullstack que combina tanto Front-End como Back-End, si deseas seguir especializandote porfavor escribe la palabra Si pero si quieres ser un programador fullstack marca como No:");
            if(javaSectionSection == "Si"){
                numeroTecnologias = prompt("Ahora que ya sabes que quieres estudiar, por favor ingresa un numero con la cantidad de tecnologias que quieras aprender con estos cursos:");
                while(contadorSecundario!= numeroTecnologias){
                    tecnologiasElegir = prompt("Por favor indica las tecnologias que deseas aprender:");
                    contadorSecundario++;
                }
                alert(`Estas fueron las tecnologias que elegiste: ${tecnologiasElegir}, mucha suerte en tus estudios.`);
            }else{
                alert("Este valor no es valido");
            }
        }else{
            alert("Por favor recuerda que las palabras clave son *C#* y *Java*, intentalo de nuevo");
        }
    }
    else{
        alert("Upps no elegiste bien, por favor recuerda, solo coloca las palabras claves *Front* o *Back*");
    }
*/

//Si quiere seguir hacia el área de Front-End o seguir hacia el área de Back-End.
 
/*Si está en el área de Front-End, si quiere aprender React o aprender Vue. Si está en el área de Back-End, 
podrá aprender C# o aprender Java.*/
 
/*Después, independientemente de las elecciones anteriores, el usuario podrá elegir entre seguir 
especializándose en el área elegida o desarrollarse para convertirse en Fullstack. Debes mostrar en pantalla 
un mensaje específico para cada elección.*/
 
/*Finalmente, pregunta en qué tecnologías le gustaría a la persona especializarse o conocer.
 Aquí, la persona puede responder N tecnologías, una a la vez. Entonces, mientras continúe respondiendo **ok**
  a la pregunta: "¿Hay alguna otra tecnología que te gustaría aprender?", sigue presentando el Prompt, 
  para que complete el nombre de la tecnología en cuestión. Y, justo después, presenta un mensaje 
  comentando algo sobre la tecnología ingresada. */


  //RESULTADO FINAL SEGUN EL INSTRUCTOR
  /*const area = prompt("¿Quieres seguir en el área de 'Front-End' o 'Back-End'? Escribe el nombre del área:");
let lenguaje = "";
if (area === "Front-End") {
    lenguaje = prompt("¿Quieres aprender React o Vue?");
} else if (area === "Back-End") {
    lenguaje = prompt("¿Quieres aprender C# o Java?");
} else {
    alert("¡No ingresaste un área válida!");
}

const especialidadOFullstack = prompt("Escribe 1 para seguir especializándote en el área elegida o 2 para desarrollarte para convertirte en Fullstack");
if (especialidadOFullstack == 1) {
    alert("¡Sigue especializándote en ${lenguaje} para dominar el área de ${area}!");
} else if (especialidadOFullstack == 2) {
    alert("¡Es hora de comenzar a aprender otros lenguajes además de ${lenguaje} si quieres convertirte en Fullstack!");
} else {
    alert("¡No ingresaste un valor válido!");
}

let mensaje = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'ok' en caso positivo.");
while (mensaje === "ok") {
    let nuevaTecnología = prompt("¿Cuál?");
    alert(`¡${nuevaTecnología} es realmente una tecnología muy interesante!`);
    mensaje = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'ok' en caso positivo.");
}*/


let contador =1;

  let area = prompt("¿Quieres seguir en el área de 'Front-End' o 'Back-End'? Escribe el nombre del área:");
  let lenguaje = "";
      if (area === "Front-End") {
          lenguaje = prompt("¿Quieres aprender React o Vue?");
      } else if (area === "Back-End") {
          lenguaje = prompt("¿Quieres aprender C# o Java?");
      } else {
          alert("¡No ingresaste un área válida!");
      }
  
  let especialidadOFullstack = prompt("Escribe 1 para seguir especializándote en el área elegida o 2 para desarrollarte para convertirte en Fullstack");
      if (especialidadOFullstack == 1) {
          alert(`¡Sigue especializándote en ${lenguaje} para dominar el área de ${area}!`);
      } else if (especialidadOFullstack == 2) {
          alert(`¡Es hora de comenzar a aprender otros lenguajes además de ${lenguaje} si quieres convertirte en Fullstack!`);
      } else {
          alert("¡No ingresaste un valor válido!");
      }
  
  let mensaje = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'ok' en caso positivo.");
      while (mensaje === "ok") {
          let nuevaTecnología = prompt("¿Cuál?");
          alert(`¡${nuevaTecnología} es realmente una tecnología muy interesante!`);
          mensaje = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'ok' en caso positivo.");
          contador ++;
      }
      