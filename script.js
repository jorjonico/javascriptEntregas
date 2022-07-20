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
const producto10 = new Producto(10, "Cuervo", "Unisex", "Niños", "negro", 500, 50, `img/negro.webp`)
const producto11 = new Producto(11, "Reptil", "Hombre", "Niños", "verde", 750, 50, `img/verde.webp`)
const producto12 = new Producto(12, "Cervatillo", "Mujer", "Niños", "rosa", 700, 50, `img/rosa.webp`)
const producto13 = new Producto(13, "Garza", "Mujer", "Niños", "violeta", 700, 50, `img/violeta.webp`)
const producto14 = new Producto(14, "Lince", "Mujer", "Adulto", "violeta", 900, 50, `img/violeta.webp`)
const producto15 = new Producto(15, "Tiburón", "Hombre", "Adulto", "celeste", 950, 50, `img/celeste.webp`)
const producto16 = new Producto(16, "Topo", "Hombre", "Niños", "celeste", 550, 50, `img/celeste.webp`)
const producto17 = new Producto(17, "jaguar", "Hombre", "Adulto", "amarillo", 950, 50, `img/amarillo.webp`)
const producto18 = new Producto(18, "Lince", "Hombre", "Niños", "amarillo", 550, 50, `img/amarillo.webp`)
const producto19 = new Producto(19, "Anaconda", "Hombre", "Adulto", "gris", 950, 50, `img/gris.webp`)
const producto20 = new Producto(20, "Culebra", "Unisex", "Niños", "gris", 550, 50, `img/gris.webp`)
const producto21 = new Producto(15, "Delfín", "Mujer", "Adulto", "celeste", 900, 50, `img/celeste.webp`)

const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15, producto16, producto17, producto18, producto19, producto20, producto21]
const productosIndex = [producto1, producto11, producto3, producto18, producto5, producto6, producto13, producto15]
//Accedo a un elemento HTML mediante su ID
const divProductos = document.getElementById("productos")

//recorro el array con forEach, luego innerHTML el navegador lo interpreta como código HTML y genera nuevos nodos con su contenido dentro del elemento seleccionado
productosIndex.forEach(productoArray => {
    divProductos.innerHTML += `
        <div class="card text-center card_color productos" id="producto${productoArray.id}" style="width: 18rem;">
        <img src="${productoArray.imagen}" class="card-img-top" alt="Protectores deportivos">
        <div class="card-body">
        <h5 class="card-title">Nombre: ${productoArray.nombre}</h5>
        <p class="card-text p">Género: ${productoArray.genero} | Edad: ${productoArray.edad}</p>
        <p class="card-text precio">Precio: $${productoArray.precio}</p>
        <button type="button" class="btn btn-outline-secondary">Enviar al Carrito</button>
        </div>
    </div>
    `
})
//Traigo los elementos por ID
const input1 = document.getElementById("input1")
const botonBusqueda = document.getElementById("botonBusqueda")
const botonTodo = document.getElementById("botonTodos")
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
                        <button type="button" class="btn btn-outline-secondary">Enviar al Carrito</button>
                        </div>
                    </div>
                    `
            });
        }
})
botonBusqueda.addEventListener("click", (event) =>{
    event.preventDefault(input1.value)
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
            <button type="button" class="btn btn-outline-secondary">Enviar al Carrito</button>
            </div>
        </div>
        `
    })
})