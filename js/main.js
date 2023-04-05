const coches = [

  {id: 001, nombre: "Footwork FA16", precio: 2750, disponibilidad: "no"},
  {id: 002, nombre: "Bennetton B139", precio: 2800, disponibilidad: "si"},
  {id: 003, nombre: "Bennetton B592", precio: 3000, disponibilidad: "no"},
  {id: 004, nombre: "Forti FG01-95", precio: 2920, disponibilidad: "si"},
  {id: 005, nombre: "Ferrari F643", precio: 3000, disponibilidad: "si"},
  {id: 006, nombre: "Mclaren MP4/30", precio: 2500, disponibilidad: "si"},
  {id: 007, nombre: "Jordan EJ12", precio: 2800, disponibilidad: "no"},
  {id: 008, nombre: "Jordan EJ12b", precio: 2850, disponibilidad: "no"},
  {id: 009, nombre: "Mclaren MP4/18", precio: 2100, disponibilidad: "si"},
  {id: 010, nombre: "Mercedes Mclaren MP4/29", precio: 2700, disponibilidad: "no"},
  {id: 011, nombre: "Red Bull C14 ", precio: 3500, disponibilidad: "si"},
  {id: 012, nombre: "Renault R25", precio: 3650, disponibilidad: "si"},
]; 

//Variable para el carrito 
const carrito = [];

function agregarProductoAlCarrito(evento) {
  const idProducto = evento.target.dataset.id;
  const producto = coches.find(producto => producto.id === idProducto);
  carrito.push(producto);
}

const botones = document.getElementById("boton");
botones.addEventListener("click", agregarProductoAlCarrito);



