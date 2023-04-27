const productos = [
    {id: "001", nombre: "Footwork FA16", precio: 2750, disponibilidad: "no"},
    {id: "002", nombre: "Bennetton B139", precio: 2800, disponibilidad: "si"},
    {id: "003", nombre: "Bennetton B592", precio: 3000, disponibilidad: "no"},
    {id: "004", nombre: "Forti FG01-95", precio: 2920, disponibilidad: "si"},
    {id: "005", nombre: "Ferrari F643", precio: 3000, disponibilidad: "si"},
    {id: "006", nombre: "Mclaren MP4/30", precio: 2500, disponibilidad: "si"},
    {id: "007", nombre: "Jordan EJ12", precio: 2800, disponibilidad: "no"},
    {id: "008", nombre: "Jordan EJ12b", precio: 2850, disponibilidad: "no"},
    {id: "009", nombre: "Mclaren MP4/18", precio: 2100, disponibilidad: "si"},
    {id: "010", nombre: "Mercedes Mclaren MP4/29", precio: 2700, disponibilidad: "no"},
    {id: "011", nombre: "Red Bull C14 ", precio: 3500, disponibilidad: "si"},
    {id: "012", nombre: "Renault R25", precio: 3650, disponibilidad: "si"},
];

//Variable para el carrito 
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarProductoAlCarrito(evento) {
  if (evento) {
    const idProducto = evento.target.dataset.id;
    const producto = productos.find(producto => producto.id === idProducto);
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    const nuevoElemento = crearElementoEnMenu(producto);
    document.getElementById("menu").appendChild(nuevoElemento);

    // Llamar a la función "agregado" para mostrar la alerta
    agregado();
  }
}

function agregado() {
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Modelo agregado con exito',
    showConfirmButton: false,
    timer: 1200
  })
}


const botones = document.querySelectorAll(".boton");
botones.forEach(boton => {
  boton.addEventListener("click", agregarProductoAlCarrito);
});

function crearElementoEnMenu(coche) {
  const nuevoElemento = document.createElement("div");
  nuevoElemento.classList.add("canvas");
  nuevoElemento.dataset.id = coche.id;

  const nombreCoche = document.createElement("p");
  nombreCoche.textContent = coche.nombre;

  const precioCoche = document.createElement("p");
  precioCoche.textContent = `Precio: $${coche.precio}`;

  const idCoche = document.createElement("p");
  idCoche.textContent = `ID: ${coche.id}`;

  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.addEventListener("click", deleteProduct);

  const iconoEliminar = createDeleteIcon();
  botonEliminar.appendChild(iconoEliminar);

  nuevoElemento.appendChild(nombreCoche);
  nuevoElemento.appendChild(precioCoche);
  nuevoElemento.appendChild(idCoche);
  nuevoElemento.appendChild(botonEliminar);

  return nuevoElemento;
}


function createDeleteIcon() {
  const i = document.createElement("i");
  i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
  i.addEventListener("click", deleteProduct);
  return i;
}

function deleteProduct(event) {
  const parent = event.target.parentElement;
  parent.remove();

  const idProducto = parent.dataset.id;
  eliminarProductoDelCarrito(idProducto);
}


async function actualizarCarrito() {
  try {
    const response = await fetch('productos.json');
    if (!response.ok) {
      throw new Error('Error al obtener los productos');
    }
    const productos = await response.json();
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    document.getElementById("menu").innerHTML = "";

    // Vuelve a crear cada elemento en el carrito
    carrito.forEach((producto) => {
      const productoEncontrado = productos.find((p) => p.id === producto.id);
      if (productoEncontrado) {
        const nuevoElemento = crearElementoEnMenu(productoEncontrado);
        document.getElementById("menu").appendChild(nuevoElemento);
      }
    });
  } catch (error) {
    console.error(error);
  }
}


actualizarCarrito();