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
  {id: "010", nombre: "Mercedes Mclaren MP4/29", precio: "2700", disponibilidad: "no"},
  {id: "011", nombre: "Red Bull C14 ", precio: "3500", disponibilidad: "si"},
  {id: "012", nombre: "Renault R25", precio: "3650", disponibilidad: "si"},

];

let cocheEncontrado = "";

while (true) {
  const idCoche = prompt("Por favor ingrese el Id del modelo que desea buscar ingresando un dato del 001 al 012 correlativamente:");

  cocheEncontrado = coches.find((coche) => coche.id === idCoche);

  if (cocheEncontrado) {
    if (cocheEncontrado.disponibilidad === "si") {
      alert(`El modelo ${cocheEncontrado.nombre} está disponible y su precio es $ ${cocheEncontrado.precio} pesos👌`);
    } else {
      const buscarOtro = confirm(`El coche ${cocheEncontrado.nombre} no está disponible en este momento😥 ¿Desea buscar otro modelo?`);
      if (!buscarOtro) {
        break; 
      }
    }
  } else {
    const buscarOtro = confirm("El Id del modelo introducido no es correcto ❌ ¿Desea buscar otro modelo?");
    if (!buscarOtro) {
      break; 
    }
  }
}

const cochesDisponibles = coches.filter((coche) => coche.disponibilidad === "si");

if (cochesDisponibles.length > 0) {
  const modelosCochesDisponibles = cochesDisponibles.map((coche) => coche.nombre);
  alert(`Los modelos actualmente disponibles son:\n- ${modelosCochesDisponibles.join(", ")}`);
} else {
  alert("Actualmente no hay modelos disponibles en el inventario📍");
}
