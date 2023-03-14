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
consultarPrecios();*/
