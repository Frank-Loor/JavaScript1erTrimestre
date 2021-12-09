//alert("funciona")

function getListado(){
    let sitios = [
        {nombre:"Universidad De Murcia",web:"https://www.um.es"},
        {nombre:"Instituto José Planes",web:"http://www.iesjoseplanes.es"},
        {nombre:"Universidad Católica De Murcia",web:"https://www.ucam.edu"}
    ]
    return sitios
}


//Funcion para comparar las tildes

// function sinTilde(cadenaOriginal){
//     let cadenaNueva = cadenaOriginal
//     for (let i=0; i<cadenaOriginal.length;i++){
//         let caracter = cadenaOriginal[i]
//         switch(caracter){
//             case "á": cadenaNueva[i] = "a";break
//             case "ó": cadenaNueva[i] = "o";break
//             case "é": cadenaNueva[i] = "e";break
//             case "í": cadenaNueva[i] = "i";break
//             case "ú": cadenaNueva[i] = "u";break
//         }
        
//     }
//     console.log(cadenaNueva)
//     return cadenaNueva
// }

function quitarAcentos(cadena){
	const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
	return cadena.split('').map( letra => acentos[letra] || letra).join('').toString();	
}




//Funcion para dibujar tablas
function dibujarTabla(arrayElemento){
    //por cada elemento insertar una fila nueva a la tabla
    for (let i=0;i<arrayElemento.length;i++){
        let fila = cuerpoTabla.insertRow()
        let celda1 = fila.insertCell()
        let celda2 = fila.insertCell()
        let celda3 = fila.insertCell()
        celda1.textContent = arrayElemento[i].nombre
    
        //Con innerHTML podemos encadenar codigo en el string que introducimos
        celda2.innerHTML = '<a target="blank" href="'+arrayElemento[i].web+'" >'+arrayElemento[i].web+"</a>"
    

        //Botón para eliminar tabla.
        //celda3.innerHTML = '<input type="button" value="Borrar" class="botonEliminar">'
        let botonBorrar = document.createElement("button")
        botonBorrar.textContent = "Eliminar"
        celda3.append(botonBorrar)
        botonBorrar.addEventListener("click",function(){
            alert("Va a eliminar una de las tablas")
            this.parentElement.parentElement.remove()

        })

    }
    
}

//El boton muestra el contenido de la barra de busqueda por una alerta
function pulsarBuscar(){
    inputBuscador.focus()
    let listaFiltrada = getListado().filter(sitio => quitarAcentos(sitio.nombre.toLowerCase()).includes(quitarAcentos(inputBuscador.value.toLowerCase())))
    
    //Vaciar tabla
    cuerpoTabla.innerHTML = ""

    
    //Otro bucle para que se muestre lo que se filtra
    dibujarTabla(listaFiltrada)
    }


//Recuperar tabla vacia para el listado

const cuerpoTabla = document.querySelector("#tablaListado tbody")
const inputBuscador = document.querySelector("input.form-control")
const botonBuscador = document.querySelector("#button-addon2")

dibujarTabla(getListado())

//Cuando se hace click se ejecuta la funcion
botonBuscador.addEventListener("click",pulsarBuscar)

//Cuando se levanta el enter se ejecuta la funcion
inputBuscador.addEventListener(
    "keyup", function(objetoInfoEvento){
        if(objetoInfoEvento.key == "Enter"){
            pulsarBuscar()
        }
    }
)

// Barra de busqueda sale seleccionada.
inputBuscador.focus()


