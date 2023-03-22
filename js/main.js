/*function consultarPrecios() {
  let continuar = true;
  
  while (continuar) {
    // Pedimos al usuario el producto a consultar
    let producto = prompt("🏎Ingrese el codigo (ID: 000) del producto a consultar:");

    // Validamos el producto ingresado
    if (!producto) {
      alert("Debe ingresar el nombre de un producto");
      continue; // Continuamos con la siguiente iteración
    }

    // Convertimos el nombre del producto a minúsculas
    producto = producto.toLowerCase();

    // Consultamos el precio del producto utilizando un switch
    let precio;

    switch (producto) {
      case "001":
        precio = 2750;
        break;
      case "002":
        precio = 2580;
        break;
      case "003":
        precio = 3000;
        break;
      case "004":
        precio = 2740;
        break;
      case "005":
        precio = 2600;
        break;
      case "006":
        precio = 4000;
        break;
      case "007":
        precio = 3140;
        break;
      case "008":
        precio = 3140;
        break;
      case "009":
        precio = 2100;
        break;
      case "010":
        precio = 2800;
        break;
      case "011":
        precio = 3200;
        break;
      case "012":
        precio = 4000;
        break;
      default:
        precio = "❌No se encontró el producto indicado❌";
        break;
    }

    // Mostramos el precio del producto al usuario
    alert(`El precio de ${producto} es: ${precio}`);

    // Preguntamos al usuario si desea continuar consultando precios
    let respuesta = prompt("¿Desea continuar consultando precios? (s/n)");

    // Validamos la respuesta del usuario
    if (respuesta && respuesta.toLowerCase() === "n") {
      continuar = false;
    }
  }
}

// Ejecutamos la función al cargar la página
consultarPrecios();
*/

const coches = [

  {id: "001", nombre: "Footwork FA16", precio: "2750", disponibilidad: "no"},
  {id: "002", nombre: "Bennetton B139", precio: "2800", disponibilidad: "si"},
  {id: "003", nombre: "Bennetton B592", precio: "300", disponibilidad: "no"},
  {id: "004", nombre: "Forti FG01-95", precio: "2920", disponibilidad: "si"},
  {id: "005", nombre: "Ferrari F643", precio: "3000", disponibilidad: "si"},
  {id: "006", nombre: "Mclaren MP4/30", precio: "2500", disponibilidad: "si"},
  {id: "007", nombre: "Jordan EJ12", precio: "2800", disponibilidad: "si"},
  {id: "008", nombre: "Jordan EJ12b", precio: "2850", disponibilidad: "si"},
  {id: "009", nombre: "Mclaren MP4/18", precio: "2100", disponibilidad: "si"},
  {id: "010", nombre: "Mercedes Mclaren MP4/29", precio: "2700", disponibilidad: "si"},
  {id: "011", nombre: "Red Bull C14 ", precio: "3500", disponibilidad: "si"},
  {id: "012", nombre: "Renault R25", precio: "3650", disponibilidad: "si"},

];

const idCoche = prompt("Introduce el ID del coche a buscar:");

const cocheEncontrado = coches.find((coche) => coche.id === idCoche);

if (cocheEncontrado) {
  if (cocheEncontrado.disponibilidad === "si") {
    alert(`El coche ${cocheEncontrado.nombre} está disponible y su precio es $ ${cocheEncontrado.precio} pesos👌`);
  } else {
    alert(`El coche ${cocheEncontrado.nombre} no está disponible en este momento😥`);
  }
} else {
  alert("El ID del coche introducido no es correcto, por favor ingrese un numero valido del (001 al 0012)❌");
}

const cochesDisponibles = coches.filter((coche) => coche.disponibilidad === "si");

alert("")
