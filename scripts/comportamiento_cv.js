const btnPerfil = document.getElementById ("btnPerfil"); 
const fotoPerfil = document.getElementById ("fotoPerfil");
let alternativa = true // Variable que servirá de condición para alternar efectos de otras funciones

function alternador () { // alterna el valor de verdad de la variable; i.e. arroja su complemento lógico
    alternativa = !alternativa;
}

function cambiaImg () { //según el estado de la variable condicionante (`alternativa`), mostrará una u otra imagen
    if (alternativa) {
        fotoPerfil.src= "https://randomuser.me/api/portraits/men/72.jpg";
    }
    else {
        fotoPerfil.src= "imagenes/cat-2083492_rsz128.jpg";
    }
}

function cambiaTxtBtn () { //idem cambiaImg pero para leyenda de botón
    if (alternativa) {
        btnPerfil.innerHTML = "Conocé a mi mascota";
    }
    else {
        btnPerfil.innerHTML = "Conocé a mi humano";
    }  
}

btnPerfil.addEventListener ("click", alternador); //cliquear botón producirá cambio de estado en la variable (`alternativa`), se reasigna a su complemnto lógico (si era `true` pasa a `false` y viceversa)

btnPerfil.addEventListener ("click", cambiaImg); // (ATENCIÓN: si agregamos "()" tras la función, se disparará al cargar la página.) Al presionar botón, cambiar a foto alternativa y:... 

btnPerfil.addEventListener ("click", cambiaTxtBtn); 
// ...cambiar leyenda botón
