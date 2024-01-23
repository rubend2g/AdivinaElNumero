let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

console.log(numeroSecreto)

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos}${intentos === 1 ? ' vez' : ' veces'} `)
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor')
        }
    }
    intentos++;
    limpiarCaja();
    return;
}

function limpiarCaja(){
   document.querySelector('#valorUsuario').value = '';

}

function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random()*10)+1;
    return numeroSecreto;    
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', 'Indica un numero del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //genear el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();