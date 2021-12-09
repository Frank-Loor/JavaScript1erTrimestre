let secreto = Math.floor(Math.random()*100)+1
console.log(secreto)

let win = false
let contador = 0

const inputNumero = document.querySelector("#inputNumero")
const botonComprobar = document.querySelector("#botonComprobar")
const pIntentos = document.querySelector("#pIntentos")
const pMensajes = document.querySelector("#pMensajes")

function botonReinicio(){
const botonReset = document.createElement("input")
                botonReset.type = "button"
                botonReset.value = "Reintentar"
                document.body.append(botonReset)
                botonReset.onclick = function(){
                    secreto = Math.floor(Math.random()*100)+1
                    console.log(secreto)
                    pIntentos.textContent = "Números intentados:"
                    pMensajes.textContent = "Partida en Curso"
                    contador = 0
                    win = false
                    inputNumero.disabled = false
                    botonComprobar.disabled = false
                    inputNumero.value = ""
                    inputNumero.focus()
                    this.remove()
                }
            }

/*inputNumero.addEventListener(
    "keydown", function(){
        console.log("keydown activado " + this.value)
    }
)*/


//HACER APARECER EL CURSOR EN EL INPUT
inputNumero.focus()

inputNumero.addEventListener(
    "keyup", function(objetoInfoEvento){
        //OBSOLETOS
        //console.log("keyup activado (which)" + objetoInfoEvento.which)
        //console.log("keyup activado (keycode)" + objetoInfoEvento.keycode)
        if(objetoInfoEvento.key == "Enter"){
            //EL USUARIO HA PLUSADO ENTER
            comprobarNumero()
        }
    }
)

/*inputNumero.addEventListener(
    "keypress", function(){
        console.log("keypress activado " + this.value)
    }
)*/

function comprobarNumero(){
    if (inputNumero.value>0 && inputNumero.value<=100){
        pIntentos.textContent += " " + inputNumero.value        
        contador++
        inputNumero.focus()
        if(inputNumero.value==secreto){
            //TERMINA PARTIDA
            win=true
            inputNumero.disabled = true
            botonComprobar.disabled = true
            //MOSTRAR MENSAJE "VICTORIA"
            document.querySelector("#pMensajes").textContent = "HAS GANADO!! 😂😂😂"
            botonReinicio()

        }

        if(inputNumero.value>secreto){
           let diferenciaMY = inputNumero.value-secreto
            if(diferenciaMY<=20){
                document.querySelector("#pMensajes").textContent = "TE HAS PASADO 👇🏼"
           }
           else if(diferenciaMY<=50 && diferenciaMY>20){
                document.querySelector("#pMensajes").textContent = "TE HAS PASADO 👇🏼👇🏼"
           }

           else if(diferenciaMY<=80 && diferenciaMY>50){
                document.querySelector("#pMensajes").textContent = "TE HAS PASADO 👇🏼👇🏼👇🏼"
           }
            

        }

        if(inputNumero.value<secreto){
            let diferenciaMN = secreto-inputNumero.value
            if(diferenciaMN<=20){
                document.querySelector("#pMensajes").textContent = "TE FALTA 👆🏼"
           }
           else if(diferenciaMN<=50 && diferenciaMN>20){
                document.querySelector("#pMensajes").textContent = "TE FALTA 👆🏼👆🏼"
           }

           else if(diferenciaMN<=80 && diferenciaMN>50){
                document.querySelector("#pMensajes").textContent = "TE FALTA 👆🏼👆🏼👆🏼"
           }


        }

        if (contador==6 && win == false){
            //TERMINA PARTIDA
            inputNumero.disabled = true
            botonComprobar.disabled = true
            //Aparecer botón "VOLVER A JUGAR"
            document.querySelector("#pMensajes").textContent = "FUC* 🍆🍆🍆"
            botonReinicio()


        }
    }
    inputNumero.value = ""
}

botonComprobar.addEventListener("click", comprobarNumero)


