

console.log('Bienvenidos a autos del caribe ')

//Funcion constructora
function Carros ( Marca, Nombre, Año, stock, precio) {
    this.Marca = Marca;
    this.Nombre= Nombre;
    this.Año = Año;
    this.stock = stock;
    this.precio = precio;
}

// creamos un objeto apartir de una funcion constructora
const item1 = new Carros ("Mazda","Mazda CX-30", 2019, 4, 50000000);
const item2 = new Carros ("BMW","BMW X5 M", 2020, 6, 60000000);
const item3 = new Carros ("Mercedes-Benz","Mercedes-benz AMG", 2023, 3, 39900000);
const item4 = new Carros ("Ford","Ford Fiesta", 2015, 6, 45000000);


// Creamos el array 
const totalitems = [item1,item2,item3,item4]


//Creamos funcuncion Filtro General el cual filtra los carros entres dos años( modelos )

function filtroGeneral () {
    const startYear = parseInt(prompt("Ingrese el año de inicio de búsqueda:"));
    const endYear = parseInt(prompt("Ingrese el año de fin de búsqueda:"));
    const filtrarCarro = totalitems.filter(Carros => Carros.Año >= startYear &&Carros.Año <= endYear )

    if (filtrarCarro.length > 0) {
        console.table(filtrarCarro)
    }else{
        alert(`No se encontraron carros entre las fechas ${startYear} y ${endYear}.`)
    };
};

//Creamos funcuncion Filtro Marca el cual realiza un filtrado por la columna marca. 

function filtroMarca () {
    let palabraClave = prompt("ingresa el producto que deseas buscar").trim().toUpperCase()
    const filtraMarca = totalitems.filter((Carros) => Carros.Marca.toUpperCase().includes(palabraClave))

    if (filtraMarca.length > 0) {
        console.table(filtraMarca)
    }else{
        alert(`No se encontraron carros con la marca ${palabraClave}.`)
    }

};

//Creamos funcuncion Filtro Nombre el cual realiza un filtrado por la columna Nombre 

function filtroNombre(){
    let palabraClave = prompt("Ingrese Nombre a buscar:").trim().toUpperCase()
    let resultado = totalitems.filter((Carros) => Carros.Nombre.toUpperCase().includes(palabraClave))

    if (resultado.length > 0) {
        console.table(resultado)
    }else{
        alert(`No se encontraron carros con la marca ${palabraClave}.`)
    }   
};

// creamos funcion para agregar productos ( carro ) en un array 

function agregarCarroAlCarrito(carro, carrito) {
    carrito.push(carro);
  }
  
// creamos funcion para obtener el total en precios de los productos( carro )  agregados en el array 
  function obtenerPrecioTotal(carrito) {
    let precioTotal = 0;
    for (let carro of carrito) {
      precioTotal += carro.precio;
    }
    return precioTotal;
  }

  // creamos funcion para seleccionar carros disponibles y agregarlos por medio de la funcion antes declarada

  function seleccionarYAgregarCarros() {
    let carrito = [];
    let seguirAgregando = true;
  
    while (seguirAgregando) {
      // Mostramos los carros disponibles
      console.log("Carros disponibles:");
      for (let i = 0; i < totalitems.length; i++) {
        console.log(`[${i+1}] ${totalitems[i].Marca} ${totalitems[i].Nombre} (${totalitems[i].Año}) - $${totalitems[i].precio} (Stock: ${totalitems[i].stock})`);
      }
  
      // Solicitamos al usuario que seleccione un carro
      let seleccion = prompt("Ingrese el número del carro que desea agregar al carrito (o '0' para salir):");
      if (seleccion === "0") {
        seguirAgregando = false;
      } else {
        // Validamos que la selección sea un número válido
        seleccion = parseInt(seleccion);
        if (isNaN(seleccion) || seleccion < 1 || seleccion > totalitems.length) {
          console.log("Selección inválida, por favor ingrese un número del 1 al " + totalitems.length);
        } else {
          // Verificamos el stock del carro seleccionado
          let carroSeleccionado = totalitems[seleccion - 1];
          if (carroSeleccionado.stock > 0) {
            // Agregamos el carro seleccionado al carrito
            agregarCarroAlCarrito(carroSeleccionado, carrito);
            console.log(`El ${carroSeleccionado.Marca} ${carroSeleccionado.Nombre} ha sido agregado al carrito.`);
  
            // Actualizamos el stock del carro seleccionado
            carroSeleccionado.stock--;
          } else {
            alert(`No hay stock disponible para el ${carroSeleccionado.Marca} ${carroSeleccionado.Nombre}.`);
          }
        }
      }
    }
    
    // Mostramos el contenido del carrito y el precio total
    console.log("Contenido del carrito:");
    for (let i = 0; i < carrito.length; i++) {
      console.log(`${i+1}. ${carrito[i].Marca} ${carrito[i].Nombre} (${carrito[i].Año}) - $${carrito[i].precio}`);
    }
    console.log(`Precio total: $${obtenerPrecioTotal(carrito)}`);
    
    return console.table(carrito);
    
  }

  // Menu 

  let seguirEjecutando = true;

  while (seguirEjecutando) {
    let seleccion = parseInt(prompt("Ingrese el número de la función que desea ejecutar: \n 1) filtroGeneral \n 2) filtroMarca \n 3) filtroNombre \n 4) seleccionarYAgregarCarros \n 0) Salir"));
  
    switch (seleccion) {
      case 0:
        seguirEjecutando = false;
        break;
      case 1:
        filtroGeneral();
        break;
      case 2:
        filtroMarca();
        break;
      case 3:
        filtroNombre();
        break;
      case 4:
        seleccionarYAgregarCarros();
        break;
      default:
        console.log("Opción inválida");
        break;
    }
  }
