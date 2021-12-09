
//CONSTANTES
const bola = document.querySelector("#bola")
const tablero = document.querySelector("#tablero")
const botonEmpezar = document.querySelector("#btnEmpezar")
//LABELS
const tiempo = document.querySelector("#tiempo")
const puntos = document.querySelector("#puntos")
const velocidad = document.querySelector("#velocidad")
//CONSTANTES DEL JUEGO
const anchuraBola = 30
const alturaBola = 30
const anchuraTablero = 600
const alturaTablero = 400
const velocidadBola = 1000

let partidaEnMarcha = false
let agitador
let temporizador

//redefinir dimensiones de tablero y bola
tablero.style.width = anchuraTablero + "px"
tablero.style.height = alturaTablero + "px"
bola.style.width = anchuraBola + "px"
bola.style.height = alturaBola + "px"



//MUEVE LA BOLA ALEATORIAMENTE
function moverBola(){

    let nuevoTop = Math.random()*(alturaTablero - alturaBola)
    let nuevoLeft = Math.random()*(anchuraTablero - anchuraBola)

    bola.style.top = nuevoTop + "px"
    bola.style.left = nuevoLeft + "px"


}


//CUENTA ATRAS DE LA ETIQUETA TIEMPO
function cuentaAtras(){
    if (parseInt(tiempo.textContent) > 0) {
        tiempo.textContent--
    }
    else {
        //ACABAR PARTIDA
        partidaEnMarcha = false
        botonEmpezar.disabled  = false
        clearInterval(temporizador)
        clearInterval(agitador)
    }
    
}


//Bola clickable
bola.addEventListener("click",function(){
    if(partidaEnMarcha) {
        
        puntos.textContent++
        //Cuando le hacemos click se mueve la bola
        moverBola()
        
        //PARA QUE EL MOVIMIENTO AUTOMATICO SE DE A PARTIR DEL CLICK
        clearInterval(agitador)
        //EL TIEMPO EN EL QUE SE MUEVE LA BOLA SE DISMINUYE CON CADA CLICK
        agitador = setInterval(moverBola, velocidadBola - (puntos.textContent*50))
        //LA VELOCIDAD AUMENTA CON RESPECTO A LOS PUNTOS
        velocidad.textContent = 1 + puntos.textContent/10

    }



})


//DEFINIR INTERACION BOTON EMPEZAR

botonEmpezar.addEventListener("click",function(){
    //Definir parametros de partida
    tiempo.textContent = 20
    puntos.textContent = 0
    velocidad.textContent = 1
    botonEmpezar.disabled = true

    //INTERVVALO CUENTA ATRAS
    
    clearInterval(temporizador)
    temporizador = setInterval(cuentaAtras, 1000)


    //Poner en marcha al intervalo
    clearInterval(agitador)
    agitador = setInterval(moverBola, velocidadBola)

    partidaEnMarcha = true


})



