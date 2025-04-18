"use strict";
var _a, _b;
const ventas = {
    total: 50,
    cantidad: 2,
    precio: 20,
    nombre: "ropa"
};
const pedido = {
    nombre: "jaime",
    edad: 45
};
ventas.total = 70;
const saludo = document.getElementById('saludo');
const texto = document.getElementById('texto');
if (saludo) {
    saludo.textContent = 'probando desde saludo';
}
if (texto) {
    texto.textContent = 'probando desde texto';
}
(_a = document.getElementById('boton1')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => alert("Probando desde saludo"));
(_b = document.getElementById('boton2')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => alert("Probando desde texto"));
console.log(ventas.total + 10);
console.log("si concatena: " + ventas.total + 10);
console.log("Prueba: " + pedido.nombre);
