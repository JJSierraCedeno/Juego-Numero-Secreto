//Variables
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//Función para asignarle un texto a las ediquetas del archivo HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Función para verificar si acertó el número o no, y dar pistas. Unido al botón 'Intentar'
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p', 'El número secreto es menor');
        } else {
        asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

//Función para limpiar la caja donde se escriben los números
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

//Función para generar el número secreto aleatorio 
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo + 1);

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

//Función para establecer las condiciones iniciales
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

//Función para reniciar el juego con el botón 'Nuevo juego'
function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego 
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();


