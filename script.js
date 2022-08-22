// Operador ternario donde compruebo al ingresar en el sitio web si existe info el localStorage, si no lo creo carrito []
const carrito = JSON.parse(localStorage.getItem("carrito")) ?? []
// operador lógico AND
carrito.length === 0 && console.log("El carito está vacio");

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

//Traigo los elemento HTML por ID
const divProductos = document.getElementById("productos")
const divCarrito = document.getElementById("carrito")
const precioCarrito = document.getElementById("precioCarrito")
//Traigo los elementos por ID
const input1 = document.getElementById("input1")
const botonBusqueda = document.getElementById("botonBusqueda")
const botonTodo = document.getElementById("botonTodos")
const botonCarrito = document.getElementById("botonCarrito")
const totalCarrito = document.getElementById("totalCarrito")
const productoCarrito = document.getElementById("productoCarrito")

// Llamó de manera asincrona mediante fetch internamente al archivo json con los productos
async function mostrarProductos(){
    const listaProductos = await fetch('productos.json')
    const productosParseados = await listaProductos.json()
    productos = productosParseados
    return productosParseados
}
mostrarProductos()
let productos = []

// Llamó de manera asincrona mediante fetch internamente al archivo json con los productos en oferta
async function productosOferta(){
    const listaProductosOferta = await fetch('productos_oferta.json')
    const productosParseadosOferta = await listaProductosOferta.json()
    return productosParseadosOferta
}
productosOferta().then(productosIndex => {
    //recorro el array con forEach, luego innerHTML el navegador lo interpreta como código HTML y genera nuevos nodos con su contenido dentro del elemento seleccionado
    productosIndex.forEach(productoArray => {
        divProductos.innerHTML += `
            <div class="card text-center card_color productos" id="producto${productoArray.id}" style="width: 18rem;">
                <img src="${productoArray.imagen}" class="card-img-top" alt="Protectores deportivos">
                <div class="card-body">
                    <h5 class="card-title">Nombre: ${productoArray.nombre}</h5>
                    <p class="card-text p">Género: ${productoArray.genero} | Edad: ${productoArray.edad}</p>
                    <p class="card-text precio">Precio: $${productoArray.precio}</p>
                    <button type="button" class="btn btn-outline-secondary">Enviar al Carrito <i class="fas fa-cart-plus"></i></button>
                </div>
            </div>
        `
    })
    //boton enviar el carrito
    productosIndex.forEach(productoArray => {
        let botonCard = document.getElementById(`producto${productoArray.id}`).lastElementChild.lastElementChild
        
        botonCard.addEventListener("click", () =>{
            const productoCarrito = new Producto (productoArray.id, productoArray.nombre, productoArray.genero, productoArray.edad, productoArray.color, productoArray.precio, productoArray.stock, productoArray.imagen);
            carrito.push(productoCarrito);
            localStorage.setItem("carrito", JSON.stringify(carrito))
            enviadoAlCarrito();
            renderizarCarrito();
        })
    })
})

//input con el filtrado de productos por color
input1.addEventListener("change", (e) =>{
        e.preventDefault();
        let colorProducto = input1.value.toLowerCase();
        const productoBuscado = productos.filter (producto => producto.color.toLowerCase() == colorProducto)
        
        if((colorProducto == "") || (productoBuscado.length === 0)) {
        divProductos.innerHTML = `<p>Producto no encontrado, NO existe ese color</p>`
        } else {divProductos.innerText =``
            productoBuscado.forEach(productosArray2 => {
                divProductos.innerHTML += `
                    <div class="card text-center card_color productos" id="producto${productosArray2.id}" style="width: 18rem;">
                        <img src="${productosArray2.imagen}" class="card-img-top" alt="Protectores deportivos">
                        <div class="card-body">
                            <h5 class="card-title">Nombre: ${productosArray2.nombre}</h5>
                            <p class="card-text p">Género: ${productosArray2.genero} | Edad: ${productosArray2.edad}</p>
                            <p class="card-text precio">Precio: $${productosArray2.precio}</p>
                            <button type="button" class="btn btn-outline-secondary">Enviar al Carrito <i class="fas fa-cart-plus"></i></button>
                        </div>
                    </div>
                    `
            });
            //boton enviar al carrito
            productoBuscado.forEach(productosArray2 => {
                let botonCard = document.getElementById(`producto${productosArray2.id}`).lastElementChild.lastElementChild
                
                botonCard.addEventListener("click", () =>{
                    const productoCarrito = new Producto (productosArray2.id, productosArray2.nombre, productosArray2.genero, productosArray2.edad, productosArray2.color, productosArray2.precio, productosArray2.stock, productosArray2.imagen);
                    carrito.push(productoCarrito);
                    localStorage.setItem("carrito", JSON.stringify(carrito))
                    enviadoAlCarrito();
                    renderizarCarrito();
                })
            })
        }

})
botonBusqueda.addEventListener("click", (event) =>{
    event.preventDefault(input1.value)
})

//Boton total carrito, saca el calculo total de los productos enviados al carrito
totalCarrito.addEventListener("click", () =>{
    // Opreador Nullish en la suma Total de los productos en carrito
    let precioTotal = 0
    carrito.forEach((producto) => {
    precioTotal += producto.precio ?? 0 
    })
    //operador ternario con las opciones del carrito: Vacio / Precio total del carrito y finalizar compra
    carrito.length === 0 ? Swal.fire('🛒 El carrito está vacío') : 
    Swal.fire({
        title: 'Carrito total a pagar: $'+ precioTotal,
        html:`<div id="productoCarrito"></div>`,
        showCancelButton: true,
        cancelButtonText: 'Seguir comprando',
        confirmButtonText: 'Finalizar compra',
    }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire('Compra finalizada','','success')
        } 
    })
    
})

//Boton todos los productos, trae la lista completa de productos
botonTodo.addEventListener("click", (event) =>{
    event.preventDefault(input1.value)
    divProductos.innerText =``
    productos.forEach(productoArray => {
        divProductos.innerHTML += `
        <div class="card text-center card_color productos" id="producto${productoArray.id}" style="width: 18rem;">
            <img src="${productoArray.imagen}" class="card-img-top" alt="Protectores deportivos">
            <div class="card-body">
                <h5 class="card-title">Nombre: ${productoArray.nombre}</h5>
                <p class="card-text p">Género: ${productoArray.genero} | Edad: ${productoArray.edad}</p>
                <p class="card-text precio">Precio: $${productoArray.precio}</p>
                <button type="button" class="btn btn-outline-secondary">Enviar al Carrito <i class="fas fa-cart-plus"></i></button>
            </div>
        </div>
        `
    })
    //boton enviar al carrito
    productos.forEach(productoArray => {
        let botonCard = document.getElementById(`producto${productoArray.id}`).lastElementChild.lastElementChild
        
        botonCard.addEventListener("click", () =>{
            const productoCarrito = new Producto (productoArray.id, productoArray.nombre, productoArray.genero, productoArray.edad, productoArray.color, productoArray.precio, productoArray.stock, productoArray.imagen);
            carrito.push(productoCarrito);
            localStorage.setItem("carrito", JSON.stringify(carrito))
            enviadoAlCarrito();
            renderizarCarrito();
        })
    })
})

// boton carrito traigo los elementos del LocalStorage que estan en el array carrito y los muestro en el DOM
botonCarrito.addEventListener("click", () =>{
    // operador ternario, primero declaramos y asignamos condicionales
    const mensCarrito = (carrito.length === 0) ? true : false
    // mostramos el mensaje
    mensCarrito ? Swal.fire('🛒 El carrito está vacío') : renderizarCarrito();
})

//funcion enviar al carrito, para actualizar en vivo la carga del carrito
// boton carrito traigo los elementos del LocalStorage que estan en el array carrito y los muestro en el DOM
function renderizarCarrito() {
    let arrayStorage = JSON.parse(localStorage.getItem("carrito"));
    divCarrito.innerText =`Productos en Carrito🔻`;
    arrayStorage.forEach((local, indice) => {
        divCarrito.innerHTML +=`
        <h6 id:"local${indice}" class="mt-2">Nombre:${local.nombre}<span class="badge bg-danger mb-2">$${local.precio}</span><button id="local${local.id}" type="button" class="btn btn-outline-dark btn-sm m-1 p-1">Borrar</button></h6>
        `
    });
        //boton borrar elementos del carrito, primero del DOM, luego del Array y por ultimo vuelvo a mandar al local storage con el array modificado sin el item, por ultimo muestro en la consola el m¿nombre del producto eliminado del carrito
    arrayStorage.forEach((local) =>{
        let botonEliminar = document.getElementById(`local${local.id}`);
        botonEliminar.addEventListener("click", () =>{
            document.getElementById(`local${local.id}`).parentElement.remove()
            carrito.splice(local,1)
            localStorage.setItem("carrito",JSON.stringify(carrito))
            console.log(`${local.nombre} Eliminada del carrito`)
        })
    })
}
// Toastify con el cartelito enviando al carrito
function enviadoAlCarrito (){
    Toastify({
        text: `Producto agregado al carrito 🛒`,
        duration: 2000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
        background: "linear-gradient(to right, #FF0000, #EBCC12)",
        },
    }).showToast();
}

