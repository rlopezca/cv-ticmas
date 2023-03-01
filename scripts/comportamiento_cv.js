const btnPerfil = document.getElementById ("btnPerfil");
const fotoPerfil = document.getElementById ("fotoPerfil");

btnPerfil.addEventListener ("click", cambiaFoto); 
// Al mantener botón presionado, cambiar a foto alternativa; ATENCIÓN: si agregamos "()" tras la función, se disparará al cargar la página y:...

// btnPerfil.onclick= cambiaFoto ()
btnPerfil.addEventListener ("click", cambiaTxtBtn); // ...cambiar leyenda botón

// document.getElementById ("btnPerfil").onclick= cambiaFoto ();
function cambiaFoto () {
    fotoPerfil.src= "imagenes/cat-2083492_rsz128.jpg";
}

function cambiaTxtBtn () {
    btnPerfil.innerHTML = "Conocé a mi humano"
}

