document.addEventListener("DOMContentLoaded",main)

function main() {
    
    //Rescatamos el formulario
    const formulario = document.querySelector("#formEnvios")
    const referencia = document.querySelector("#refPedido")
    const peso = document.querySelector("#peso")

    //RESCATAMOS TABLA Y BOTON
    const botonTabla = document.querySelector("#anyadir")
    const cuerpoTabla = document.querySelector("#tablaEnvios>tbody")

    //RESCATAMOS EL TFOOT
    const numeroEnvios = document.querySelector("#totalEnvios")
    const pesoPedidos = document.querySelector("#totalPeso")
    let contadorEnvios = 0
    let sumadorPeso = 0

    //BOTON BORRAR
    const botonBorrar = document.querySelector("#reset")

    

    
    //AÑADIMOS EL ACTION AL FORMULARIO
    formulario.action = "todoOK.html"

    formulario.addEventListener("submit",function(ev){
        
        //RETENEMOS EL FORMULARIO
        ev.preventDefault()

        //comprobar todos los campos; si todo ha ido bien enviar form
        if (checkForm()) {
            this.submit()
    
        }
    })

    function checkForm() {
        let todoOK = true

        const errorReferencia = document.querySelector("#refPedidoError")
        const errorPeso = document.querySelector("#pesoError")

        
        
        if (!checkReferencia(referencia.value.trim())) {
            todoOK = false
            
            errorReferencia.classList.add("campoIncorrecto")
            errorReferencia.textContent = "Referencia Inválida."
        }else {
            errorReferencia.classList.remove("campoIncorrecto")
            errorReferencia.textContent = ""
        }
    
        
        if (!checkPeso(peso.value.trim())) {
            todoOK = false
            
            errorPeso.classList.add("campoIncorrecto")
            errorPeso.textContent = "Peso no permitido."
        }else {
            errorPeso.classList.remove("campoIncorrecto")
            errorPeso.textContent = ""
        }

        return todoOK
    
    }

    function checkReferencia(referencia) {
        let expreg = /^[a-zA-ZñÑ]\d{4}$/
        return expreg.test(referencia)

    }


    function checkPeso(peso){
        let expreg1 = /^\d{1,2}.\d$/ //PARTE ENTERA > 0 < 10
        let expreg2 = /^0+.0$/

        return (expreg1.test(peso) && !expreg2.test(peso))

    }

    
    
    botonTabla.addEventListener("click",function(){
        
        if(checkForm()){
        addTable()
        }

    })



    function addTable() {
        
        

        
        let nuevaFila = cuerpoTabla.insertRow()
        let celda1 = nuevaFila.insertCell()
        let celda2 = nuevaFila.insertCell()
        let celda3 = nuevaFila.insertCell()

        celda1.textContent = referencia.value
        contadorEnvios++
        celda2.textContent = peso.value
        
        
        //Botón para eliminar tabla.
        let botonBorrar = document.createElement("button")
        botonBorrar.textContent = "Eliminar"
        celda3.append(botonBorrar)
        botonBorrar.addEventListener("click",()=>{

            sumadorPeso-= parseFloat(celda2.textContent)
            contadorEnvios--
            nuevaFila.remove()

            pesoPedidos.value = sumadorPeso.toFixed(1)
            numeroEnvios.value = contadorEnvios

        })
        
        
        sumadorPeso+= parseFloat(celda2.textContent)

        pesoPedidos.value = sumadorPeso.toFixed(1)
        numeroEnvios.value = contadorEnvios
        


    }

    botonBorrar.addEventListener("click",(ev)=>{

        ev.preventDefault()

        referencia.value = ""
        peso.value = ""

    })





}