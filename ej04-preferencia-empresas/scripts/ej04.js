//datos versión fácil
//let empresas = ["Google","Facebook","Apple","Everis","Twitter","Microsoft"]

//datos versión menos fácil

let empresas = [
    {name: "Google", code: "goo"},
    {name: "Facebook", code: "fac"},
    {name: "Apple", code: "app"},
    {name: "Everis", code: "eve"},
    {name: "Twitter", code: "twi"},
    {name: "Microsoft", code: "mic"}
]

//rellena la tabla con los datos empresas y los inserta en el select que le pasamos
function rellenarTabla (select){

    
    
    for (let empresa of empresas){

        let nuevoOption = document.createElement("OPTION")
        nuevoOption.textContent = empresa.name
        nuevoOption.value = empresa.code
        select.append(nuevoOption)

    }
}

//Constantes
const selectEmpresa1 = document.querySelector("#empresa1")
const selectEmpresa2 = document.querySelector("#empresa2")
const inputFormulario = document.querySelector("input.form-control")
const botonEnviar = document.querySelector("button")
const tablaDatos = document.querySelector("#tablaDatos")
const formulario = document.querySelector("form")

//rellena empresa1
rellenarTabla(selectEmpresa1)

//cuando elegimos rellena empresa2
selectEmpresa1.addEventListener(
    "change",
    function(){
        selectEmpresa2.textContent = ""
        selectEmpresa2.disabled=false
       //SI SE ELIGE EL VALUE "NADA" SE DESHABILITA EMPRESA2
        if(selectEmpresa1.value=="nada"){
            selectEmpresa2.disabled=true
        }
        else{
            rellenarTabla(selectEmpresa2)
            valueSelect = this.textContent
        }
    }
)

//al clickarlo envia rellena la tabla con los datos

formulario.addEventListener("submit",function(ev){
    
    //Un marcador para no eviar el formularion
    ev.preventDefault()

    let hayErrores=false
    //QUITAMOS EL BORDE ROJO DE LAS ETIQUETAS DE HTML
    inputFormulario.classList.remove("error")
    selectEmpresa1.classList.remove("error")
    selectEmpresa2.classList.remove("error")
    
    //comprobar INPUT
    let nombre = inputFormulario.value.trim()
    if (nombre.length == 0) {
        //AÑADE EL BORDE ROJO A LA CLASE
        inputFormulario.classList.add("error")
        hayErrores = true
    }
    
    //comprobar los SELECT
    if (selectEmpresa1.value == "nada"){

        selectEmpresa1.classList.add("error")
        hayErrores = true
        
    }
    if( selectEmpresa2.value == "nada"){
        
        selectEmpresa2.classList.add("error")
        hayErrores = true
    }

    if(!hayErrores){
        //enviar formulario a la tabla

        
            //CASTEAMOS LA TABLA
            let fila = tablaDatos.insertRow()
            let celda1 = fila.insertCell()
            let celda2 = fila.insertCell()
            let celda3 = fila.insertCell()
            let celda4 = fila.insertCell()
            let celda5 = fila.insertCell()
            //INSERTAMOS NOMBRE, Y LOS NOMBRES DE LAS EMPRESAS 1 y 2
            celda1.textContent = inputFormulario.value
            celda2.textContent = selectEmpresa1.children[selectEmpresa1.selectedIndex].textContent
            celda3.textContent = selectEmpresa2.children[selectEmpresa2.selectedIndex].textContent
            
            //FECHA
            let fecha = new Date()

            celda4.textContent = fecha.getDay()+ "/" + fecha.getMonth() + "/" + fecha.getFullYear() + " ||  " + fecha.getHours() + ":" + fecha.getMinutes()
            
            //BOTON BORRAR
            let botonBorrar = document.createElement("button")
            botonBorrar.textContent = "Eliminar"
            celda5.append(botonBorrar)
            botonBorrar.addEventListener("click",function(){
            this.parentElement.parentElement.remove()

        })
        
            //VACIAR INPUT
            inputFormulario.value = ""
            selectEmpresa1.selectedIndex = 0
            selectEmpresa2.disabled = true
            selectEmpresa2.innerHTML = "<option value='nada'>(Elige empresa)</option>"
            inputFormulario.focus()

            
        }

    }

    /**Si todo va bien, hacer lo que tengamos que hacer con esos datos
     * en este caso 
     */
    //this.submit()


)






