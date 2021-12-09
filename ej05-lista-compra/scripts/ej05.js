


//RESCATAR CONSTANTES
const inputProducto = document.querySelector("#txtAdd")
const botonAdd = document.querySelector("#btnAdd")
const tablaLista = document.querySelector("#mylist")
        //BOTONES
const botonSeleccionaTodo = document.querySelector("#btnSelAll")
const botonSeleccionaNada = document.querySelector("#btnSelNot")
const botonInvertirSeleccion = document.querySelector("#btnInvSel")
const botonMoverSeleccionado = document.querySelector("#btnMovSel")
const botonBorrarSeleccionado = document.querySelector("#btnDelSel")
        //CARRO
const tablaCarro = document.querySelector("#mycart")
const botonVaciarCarro = document.querySelector("#btnEmpCar")



//FOCUS INPUT
inputProducto.focus()


//CUANDO HAGAMOS ENTER O PRESIONEMOS EL BOTON

botonAdd.addEventListener("click",crearListaItem)


inputProducto.addEventListener(
    "keyup", function(objetoInfoEvento){
        if(objetoInfoEvento.key == "Enter"){
            crearListaItem()
        }
    }
)


//CREAMOS UN ITEM DE LISTA Y LE AÑADIMOS EL TEXTO DEL INPUT
function crearListaItem(){
    
    
    let textoInput = inputProducto.value.trim()
    //ESPACIOS VACIOS
    if(textoInput.length == 0) return
    //AÑADE ITEM
    let nuevoItem = document.createElement("li")
    nuevoItem.textContent = inputProducto.value
    tablaLista.append(nuevoItem)
    //VACIA EL INPUT
    inputProducto.value = ""
    //ENFOCA EL INPUT
    inputProducto.focus()
    
}


botonSeleccionaTodo.addEventListener("click",function(){

    Array.from(tablaLista.children).forEach(element => {
        element.classList.add("seleccionado")
    })

})


botonSeleccionaNada.addEventListener("click",function(){

    Array.from(tablaLista.children).forEach(element => {
        element.classList.remove("seleccionado")
    })

})


botonInvertirSeleccion.addEventListener("click", function(){

    Array.from(tablaLista.children).forEach(element => {
        element.classList.toggle("seleccionado")
    })

})

botonMoverSeleccionado.addEventListener("click", function(){

    Array.from(tablaLista.children).forEach(element => {
        if (element.className == "seleccionado") {
            
            //AÑADO EL PRODUCTO A LA OTRA TABLA
            let nuevoItem = document.createElement("li")
            nuevoItem.textContent = element.textContent
            tablaCarro.append(nuevoItem)

            //LO BORRO DE LA ANTERIOR TACHO DE LA LISTA
            element.remove()
            
        }
    })

})

botonBorrarSeleccionado.addEventListener("click", function(){

    Array.from(tablaLista.children).forEach(element => {
        if (element.className == "seleccionado") element.remove()
        
    })

})

botonVaciarCarro.addEventListener("click",function(){
    Array.from(tablaCarro.children).forEach(element => {
        element.remove()
        
    })
})





