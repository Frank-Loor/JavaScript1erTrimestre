const form = document.querySelector("form")

form.addEventListener("submit", function(ev){
    ev.preventDefault()
    //comprobar todos los campos; si todo ha ido bien enviar form
    if (checkForm()) this.submit()
})

function checkForm() {
    let todoOK = true

    
    let error
    
    
    const nombre = document.querySelector("#conductor")
    if (!checkNombre(nombre.value.trim())) {
        todoOK = false
        error = document.querySelector("#conductorError")
        error.classList.add("msgError")
        error.textContent = "Error"
    }
    
    

    const dni = document.querySelector("#dni")
    if (!checkDNI(dni.value.trim())) {
        todoOK = false
        error = document.querySelector("#dniError")
        error.classList.add("msgError")
        error.textContent = "Error"
    }
    



    const edad = document.querySelector("#edad")
    if (!checkEdad(edad.value)) {
        todoOK = false
        error = document.querySelector("#edadError")
        error.classList.add("msgError")
        error.textContent = "Error"
    }
    



    const carne = document.querySelector("#carne")
    if (!checkCarne(carne.checked)) {
        todoOK = false
        error = document.querySelector("#carne")
        error.classList.add("msgError")
        error.textContent = "Error"
    }
    


    
    const tipoPermiso = document.querySelectorAll("input[name='tc']")
    if (!checkPermiso(tipoPermiso)) {
        todoOK = false
        error = document.querySelector("#tipoCarneError")
        error.classList.add("msgError")
        error.textContent = "Error"
    }



    
    const tipoMulta = document.querySelector("#tipo")
    if (!checkMulta(tipoMulta.value)) {
        todoOK = false
        error = document.querySelector("#tipoInfraccionError")
        error.classList.add("msgError")
        error.textContent = "Error"
    }
    
    
    
    

    /*if (!checkEdad()) todoOK = false*/
    return todoOK
}

function checkNombre(nombre) {
    let expreg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ][a-zA-ZñÑáéíóúÁÉÍÓÚ \-]*$/
        return (expreg.test(nombre))

    //return (nombre.length > 0 && isNaN(nombre)) //isNotANumber
}

function checkDNI(dni) {
    //8 dígitos y 1 letra
    let expreg = /^\d{8}[a-zA-Z]$/
    if (expreg.test(dni)) {
        //comprobar la letra
        const letras = 'TRWAGMYFPDXBNJZSQVHLCKET'
        let numerosDNI = dni.slice(0,8)
        let letraDNI = dni.slice(8,9)
        let posicion = numerosDNI % 23
        if (letraDNI.toUpperCase() == letras[posicion])
            return true
    }
    return false
}


function checkEdad(edad) {
    return (edad >= 15 && edad <= 150)
    
}


function checkCarne(carne) {
    if (carne) {
        
        return true
    }else return false
}

function checkPermiso(permiso) {
    let radioCheck = false
    permiso.forEach(element => {
        if (element.checked) {
            radioCheck = true
            return
        }
    });
    return radioCheck
}

function checkMulta(multa) {
    
    return multa.length
}


