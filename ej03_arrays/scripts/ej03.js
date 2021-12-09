/**for (let i=1;i<=provincias.length;i++){
    console.log(provincias[i])
}
*/

const selectProvincias = document.querySelector("#provincias")
const selectMunicipios = document.querySelector("#municipios")

for (let i in provincias){
    let nuevoOption = document.createElement("OPTION")
    nuevoOption.textContent = provincias[i]
    nuevoOption.value = i
    selectProvincias.append(nuevoOption)

}

selectProvincias.addEventListener(
    "change",
    function(){


        //SACA EL VALUE DEL OPTION
        provinciaElegida = (this.children[this.selectedIndex].value)

        //SACA EL MUNICIPIO
        //console.log(municipios["01"]["0014"])

        for (let i in municipios[provinciaElegida]){
            let nuevoOption1 = document.createElement("OPTION")
            nuevoOption1.textContent = municipios[provinciaElegida] [i]
            nuevoOption1.value = i
            selectMunicipios.append(nuevoOption1)
        
        }

    }
)






