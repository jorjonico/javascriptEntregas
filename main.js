//clase del producto con el constructor
class Producto {
    constructor(id, nombre = "Predeterminado", genero = "Predeterminado", edad = "Predeterminado", color = "Predeterminado", precio = 1, stock = 1, imagen) {
        this.id = id
        this.nombre = nombre
        this.genero = genero
        this.edad = edad
        this.color = color
        this.precio = precio
        this.stock = stock
        this.imagen = imagen
    }
}
//productos + array de productos
const producto1 = new Producto(1, "Toro", "Hombre", "Adultos", "negro", 950, 50, `img/negro.webp`)
const producto2 = new Producto(2, "Pantera", "Mujer", "Adultos", "negro", 900, 50, `img/negro.webp`)
const producto3 = new Producto(3, "Leona", "Mujer", "Adultos", "rojo", 900, 50, `img/rojo.webp`)
const producto4 = new Producto(4, "Agila", "Hombre", "Adultos", "rojo", 950, 50, `img/rojo.webp`)
const producto5 = new Producto(5, "Tigre", "Hombre", "Niños", "azul", 750, 50, `img/azul.webp`)
const producto6 = new Producto(6, "Chita", "Mujer", "Niños", "rosa", 700, 50, `img/rosa.webp`)
const producto7 = new Producto(7, "Pantera", "Unisex", "Niños", "verde", 600, 50, `img/verde.webp`)
const producto8 = new Producto(8, "Iguana", "Unisex", "Niños", "verde", 750, 50, `img/verde.webp`)
const producto9 = new Producto(9, "Ave", "Unisex", "Niños", "azul", 500, 50, `img/azul.webp`)
const producto10 = new Producto(10, "Jaguar", "Unisex", "Niños", "negro", 500, 50, `img/negro.webp`)

const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto8, producto9,]
//Accedo a un elemento HTML mediante su ID
const divProductos = document.getElementById("productos")
//recorro el array con forEach, luego innerHTML el navegador lo interpreta como código HTML y genera nuevos nodos con su contenido dentro del elemento seleccionado
productos.forEach(productoArray => {
    divProductos.innerHTML += `
        <div class="card text-center card_color productos" id="producto${productoArray.id}" style="width: 18rem;">
        <img src="${productoArray.imagen}" class="card-img-top" alt="Protectores deportivos">
        <div class="card-body">
        <h5 class="card-title">Protector: ${productoArray.nombre}</h5>
        <p class="card-text p">Género: ${productoArray.genero} | Color: ${productoArray.color}</p>
        <p class="card-text precio">Precio: $${productoArray.precio}</p>
        <button type="button" class="btn btn-outline-secondary">Enviar al Carrito</button>
        </div>
    </div>
    `
})

const boton1 = document.getElementById("boton1")
const input1 = document.getElementById("input1")
const botonBusqueda = document.getElementById("botonBusqueda")

input1.addEventListener("input", () => {
    console.log(input1.value)
})

input1.addEventListener("change", () =>{
    console.log(input1.value)
})

botonBusqueda.addEventListener("click", (event) =>{
    console.log(input1.value)
    event.preventDefault()
})


class User {
    constructor(nombre, email, password){
        this.nombre = nombre
        this.email = email
        this.password = password
    }
    
}

const usuariosIngresados = []

const form = document.getElementById("idForm")
const divUsers = document.getElementById("divUsers")
const botonUsers = document.getElementById("botonUsers")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    let nombre = document.getElementById("idUser").value
    let email = document.getElementById("idEmail").value
    let password = document.getElementById("idPassword").value

    const user = new User(nombre, email, password)
    usuariosIngresados.push(user)
    console.log(usuariosIngresados)

    form.reset()
})

botonUsers.addEventListener("click", () => {
    usuariosIngresados.forEach(user =>{
        divUsers.innerHTML +=`
        <div class="card" style="width: 18rem; margin: 3px">
            <div class="card-body">
                <h5 class="card-title">${user.nombre}</h5>
                <p class="card-text">${user.email}</p>
            </div>
        </div>
        `
    })
})


const resultadoBusqueda = []
let productosMostrar
const divProductos = document.getElementById("idDivProductos")
for(let producto of productos){
    productosMostrar = divProductos.innerHTML +=`

    `
}

const inputBusqueda = document.getElementById("idinputBusqueda")
const buttonBusqueda = document.getElementById("idbubusqueda")

buttonBusqueda.addEventListener("click", () =>{
    resultadoBusqueda = productos.filter(producto => producto.color >= inputBusqueda.value)
    productosMostrar = resultadoBusqueda
})


function filtrarBusqueda(e) {
    e.preventDefault();

    // Tomo el value del input y le agrego toLowerCase para que la búsqueda no sea
    // case sensitive
    let ingreso = document.getElementById("busqueda").value.toLowerCase();
    let arrayFiltrado = alfajores.filter((elemento) => elemento.marca.toLowerCase().includes(ingreso));

    imprimirProductosEnHTML(arrayFiltrado);
}

// --- Eventos
let btnFiltrar = document.getElementById("btnFiltrar");
btnFiltrar.addEventListener("click", filtrarBusqueda);

// Ejecución del código
// --- Invocación de funciones ---
imprimirProductosEnHTML(alfajores);

// Consulta al Storage para saber si hay información almacenada
// Si hay datos, se imprimen en el HTML al refrescar la página
carrito = chequearCarritoEnStorage();