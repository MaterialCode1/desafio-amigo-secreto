// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;

    if (nombre == "") {
        alert ("Por favor, inserte un nombre.");
    } else {
        amigos.push(nombre);
        actualizaLista (nombre);

        function limpiarCaja (){
            let valorCaja = document.querySelector ("#amigo");
            valorCaja.value = "";
        }
        limpiarCaja();
    }

return;    
}

function actualizaLista (nombre) {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML += `<li>${nombre}</li>`;
    return;
}

function sortearAmigo() {
    if (listaAmigos.length===0) {
        alert ("No hay jugadores");
        return; 
    }
    let amigoSorteado = amigos[Math.floor(Math.random()*amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";

}