//Varianbles principales
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(element,texto){
    let elementoHTML = document.querySelector(element);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${(intentos === 1)? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p","El número secreto es menor");
        } else{
            asignarTextoElemento("p","El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados); 
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p","Ya se sortearon todos los numero posibles");
    } else{
        //si el numero generado ya esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del número secreto");
    asignarTextoElemento("p",`Indica un número entre el 1 y el ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1; 
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar número aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Desabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");

}

condicionesIniciales();

