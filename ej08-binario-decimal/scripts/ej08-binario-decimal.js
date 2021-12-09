document.addEventListener("DOMContentLoaded",main)

function main() {

    let contenedorBotones = document.querySelector("#byte")
    contenedorBotones.addEventListener("click",function(ev){

        if(ev.target.nodeName == "BUTTON"){

            ev.target.textContent = (++ev.target.textContent) % 2
            updateDecimal()

        }
       
    })


    /*
    let todosLosBotones = document.querySelectorAll("#byte>button")
    todosLosBotones.forEach(element => {
        element.addEventListener("click",function(){
            this.textContent = (++this.textContent) % 2
            updateDecimal()
        })
    })*/
}

function updateDecimal() {
    let todosLosBotones = document.querySelectorAll("#byte>button")
    let decimal = 0
    todosLosBotones.forEach(element => {
        if (element.textContent > 0) {
            decimal += Math.pow(2,element.id)
        }
        document.querySelector("#decimal").value = decimal
    })
}