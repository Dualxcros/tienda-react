console.log("JavaScript listo para practicar");
//reto 1

console.log("\n--- RETO 1 ---");

function suma(a, b) {
 const total = a + b;
 return total;
}
const resultado_suma = suma(5, 3);
console.log('la suma de' + ' 5 ' + '+' + ' 3 ' +' es '+ resultado_suma);

function resta(a, b) {
 const total = a - b;
 return total;
}
const resultado_resta = resta(7, 3);
console.log('la resta de' + ' 7 ' + '-' + ' 3 ' +' es '+ resultado_resta);

function multiplicar(a, b) {
 const total = a * b;
 return total;
}
const resultado_multiplica = multiplicar(7, 3);
console.log('la multiplicacion de' + ' 7 ' + '*' + ' 3 ' +' es '+ resultado_multiplica);

function dibivir(a, b) {
 const total = a / b;
 return total;
}
const resultado_dividir = dibivir(7, 3);
console.log('la divicion de' + ' 7 ' + '/' + ' 3 ' +' es '+ resultado_dividir);

function promedio(a, b, c) {
 const total = (a + b + c) / (3);
 return total;
}
const resultado_pro = promedio(4, 6, 3);
console.log('el promedio de' + ' 4 ' + '6' + ' 3 ' +' es '+ resultado_pro);

// RETO 2
const cuadrado = (numero) => numero * numero;

const esMayorEdad = (edad) => edad >= 18;

const nombreCompleto = (nombre, apellido) => nombre + apellido;

console.log("\n--- RETO 2 ---");
console.log("Cuadrado de 4:", cuadrado(4));
console.log("¿Es mayor de edad (20 años)?:", esMayorEdad(20));
console.log("Nombre completo:", nombreCompleto("Luis Gerardo ", "Rico"));

// reto 3
const productos = [
  { id: 1, nombre: 'Mouse', precio: 50000, categoria: 'Perifericos', stock: 5 },
  { id: 2, nombre: 'Teclado', precio: 90000, categoria: 'Perifericos', stock: 0 },
  { id: 3, nombre: 'Monitor', precio: 650000, categoria: 'Pantallas', stock: 3 },
  { id: 4, nombre: 'Audífonos Gamer', precio: 120000, categoria: 'Audio', stock: 8 },
  { id: 5, nombre: 'Micrófono USB', precio: 180000, categoria: 'Audio', stock: 0 },
  { id: 6, nombre: 'Silla Ergonómica', precio: 450000, categoria: 'Mobiliario', stock: 2 },
  { id: 7, nombre: 'Cámara Web HD', precio: 85000, categoria: 'Perifericos', stock: 10 },
  { id: 8, nombre: 'Pad Mouse XL', precio: 35000, categoria: 'Perifericos', stock: 15 },
  { id: 9, nombre: 'Disco Duro Externo 1TB', precio: 220000, categoria: 'Almacenamiento', stock: 4 },
  { id: 10, nombre: 'Memoria USB 64GB', precio: 40000, categoria: 'Almacenamiento', stock: 12 }
];

// Reto 4 
console.log("\n--- RETO 4 ---");
productos.forEach((producto, indice) => {
 console.log(`${indice + 1}. ${producto.nombre} - precio $${producto.precio} - stock: ${producto.stock}`);
});

// Reto 5
const preciosConIva = productos.map(producto => producto.nombre + ' $'+ producto.precio * 1.19  );
const nombresMayuscula = productos.map(producto => producto.nombre.toUpperCase());
const resumenProductos = productos.map(producto => `${producto.nombre} cuesta $${producto.precio}`);

console.log("\n--- RETO 5 ---");
console.log("Precios con IVA:", preciosConIva);
console.log("Nombres en mayúscula:", nombresMayuscula);
console.log("Resumen de productos:", resumenProductos);

// Reto 6

const mayoresA100k = productos.filter(producto => producto.precio > 100000);
const entre50ky200k = productos.filter(producto => producto.precio >= 50000 && producto.precio <= 200000);
const categoriaPerifericos = productos.filter(producto => producto.categoria === 'Perifericos');
const productoId5 = productos.find(producto => producto.id === 5);

function buscarProducto(id) {
  return productos.find(producto => producto.id === id);
}

console.log("\n--- RETO 6 ---");
console.log("Productos mayores a $100.000:", mayoresA100k);
console.log("Productos entre $50.000 y $200.000:", entre50ky200k);
console.log("Categoría Periféricos:", categoriaPerifericos);
console.log("Producto con id 5:", productoId5);
console.log("Prueba de función buscarProducto(3):", buscarProducto(3));

// Reto 7

const hayAgotados = productos.some(producto => producto.stock === 0);
const hayMayor1M = productos.some(producto => producto.precio > 1000000);
const preciosMayoresACero = productos.every(producto => producto.precio > 0);
const stockMayorOIgualCero = productos.every(producto => producto.stock >= 0);

const valorInventario = productos.reduce(
  (total, producto) => total + (producto.precio * producto.stock),
  0
);

console.log("\n--- RETO 7 ---");
console.log("1. ¿Existe algún producto agotado?:", hayAgotados);
console.log("2. ¿Existe algún producto con precio mayor a $1.000.000?:", hayMayor1M);
console.log("3. ¿Todos los productos tienen precio mayor que cero?:", preciosMayoresACero);
console.log("4. ¿Todos los productos tienen stock mayor o igual que cero?:", stockMayorOIgualCero);
console.log("5. Valor total del inventario:", valorInventario);

// Reto 8

const productoCopia = {
  ...productos[0],
  precio: 55000,
  stock: 0
};

const estadoCopia = productoCopia.stock > 0 ? 'Disponible' : 'Agotado';

console.log("\n--- RETO 8 ---");
console.log("Producto original:", productos[0]);
console.log("Copia modificada:", productoCopia);
console.log(`El producto ${productoCopia.nombre} cuesta $${productoCopia.precio} y su estado es: ${estadoCopia}.`);