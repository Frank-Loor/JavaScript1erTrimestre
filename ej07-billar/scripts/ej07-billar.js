//CONSTANTES TABLERO
const tablero = document.querySelector("#tablero");
const anchuraTablero = 900
const alturaTablero = 600

//CONSTANTES BOLA

const anchuraBola = 30
const alturaBola = 30

//INSTANCIA CLASES

let bolas = []

//let nuevoTop
//let nuevoLeft



function addBola(){
    //Insertar en el array de bolas una nueva bola
    let y = Math.random()*(alturaTablero - alturaBola)
    let x = Math.random()*(anchuraTablero - anchuraBola)
    let velX = Math.random()*4 - 2
    let velY = Math.random()*4 - 2

    //CREAR UN NUEVO DIV PARA LA BOLA
    let nuevoDivBola = document.createElement("div")

    //INSTACIAMOS LA BOLA
    let nuevaBola = new Bola(x,y,velX,velY,nuevoDivBola)

    bolas.push(nuevaBola)
    
    //DARLE PROPIEDADES DE ASPECTO Y POSICION
    
    nuevoDivBola.classList.add("bola")

    nuevoDivBola.style.width = anchuraBola + "px"
    nuevoDivBola.style.height = alturaBola + "px"

    nuevoDivBola.style.top = y + "px"
    nuevoDivBola.style.left = x  + "px"

    //HACER QUE SEA HIJO DEL TABLERO

    tablero.append(nuevoDivBola)

    //DEVOLVER BOLA
    return nuevoDivBola

}

/*//HACER QUE LA BOLA SE MUEVA HACIA ABAJO

function moverBolas() {

    nuevoTop += velY
    nuevoLeft += velX

    bola.style.top = nuevoTop + "px"
    bola.style.left = nuevoLeft + "px"

    if (nuevoTop > (alturaTablero-alturaBola) || nuevoTop < 0) {
        
        velY*=-1
        
    }
    if (nuevoLeft > (anchuraTablero-anchuraBola) || nuevoLeft < 0) {

        velX*=-1

    }

}*/

function main(){
//DEFINIR DIMENSIONES DEL TABLERO
tablero.style.width = anchuraTablero + "px"
tablero.style.height = alturaTablero + "px"
}
main()

addBola()

//let abajo = setInterval(bajarBola,1)




