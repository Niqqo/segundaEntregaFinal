const formulario = document.querySelector("#formulario-nombres")
const inputNombres = document.querySelector("#input-nombre")
const contenedorDeNombres = document.querySelector("#contenedor")

let carteraClientes = []

const ingresarCliente = (array, valor) => {
    array.push(valor)    
}

const inyectarHTML = (array) => {
    const arrayInyectarHTML = array.reduce((acc, nombre) => {
        return acc + `
        <div class="divNombres">
            <p>${nombre}</p>
        </div>
        `
    }, "")
    return arrayInyectarHTML
}

const convertirAJSONYSubirAlLS = (clave, valor) => {
    const arrayAJSON = JSON.stringify(valor)
    localStorage.setItem(clave, arrayAJSON)
}

const traerDelLS = (clave) => {
    const arrayTraidoDelLS = localStorage.getItem("carteraClientes") || "[]"
    const parsearArray = JSON.parse(arrayTraidoDelLS)
    return parsearArray
}

formulario.onsubmit = (event) => {
    event.preventDefault()
    ingresarCliente(carteraClientes, inputNombres.value)
    formulario.reset()
    contenedorDeNombres.innerHTML = inyectarHTML(carteraClientes)  
    convertirAJSONYSubirAlLS("carteraClientes", carteraClientes) 
    console.log(carteraClientes)
}

let carteraClientesTraidosDelLS = traerDelLS("carteraClientes")
carteraClientes = carteraClientesTraidosDelLS
contenedorDeNombres.innerHTML = inyectarHTML(carteraClientes)
console.log(carteraClientes)
