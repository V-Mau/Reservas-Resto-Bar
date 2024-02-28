"use strict";
function saludar(nombre) {
    return (`Hola, ${nombre}! como estas?`);
}
const mensaje = saludar('Homero');
console.log(mensaje);
const nuevoMensaje = saludar('Mauricion');
console.log(nuevoMensaje);
function esPar(numero) {
    return numero % 2 === 0;
}
console.log(esPar(4));
console.log(esPar(3));
console.log(esPar(20));
const nombre = 'Cintia';
const edad = 38;
const cuentaUser = true;
console.log(`Nombre: ${nombre}`);
console.log(`Edad: ${edad}`);
console.log(`Cuenta de usuari: `, cuentaUser);
function suma(numero1, numero2) {
    return numero1 + numero2;
}
console.log('El resultado es:', suma(23, 33));
function numAlCuadrado(num) {
    return num * num;
}
console.log('El cuadrado de 33 es:', numAlCuadrado(33));
console.log('El cuadrade 7 es:', numAlCuadrado(7));
const arrNum = [3, 6, 9];
function sumarArrNum(arrNum) {
    let sumaTotal = 0;
    for (let i = 0; i < arrNum.length; i++) {
        sumaTotal += arrNum[i];
    }
    return sumaTotal;
}
console.log('La suma del array es: ', sumarArrNum(arrNum));
const libroHarryPotter = {
    titulo: 'La camara secreta',
    autor: 'J. K. Rowling',
    año: 1998,
    genero: 'Fantasía'
};
const libroDune = {
    titulo: 'Dune',
    autor: 'Frank Herbert',
    año: 2021,
    genero: 'sci-fi'
};
console.log(libroHarryPotter, libroDune);
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    hacerSonido() {
        console.log('Hacer algun sonido');
    }
}
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre);
        this.raza = raza;
    }
    ladrar() {
        console.log('Wof Wof!!!');
    }
}
const miPerro = new Perro('Tilin', 'Caniche');
console.log(miPerro);
const perro = new Animal('Tilin');
console.log(perro);
function propiedadAuto(auto) {
    console.log(`Marca: ${auto.marca}`);
    console.log(`Modelo: ${auto.modelo}`);
    console.log(`Año: ${auto.año}`);
}
const miAuto = {
    marca: 'Chevrolet',
    modelo: 'Aveo',
    año: 2013
};
const miOtroAuto = {
    marca: 'Ford',
    modelo: 'Rager',
    año: 2021
};
propiedadAuto(miAuto);
propiedadAuto(miOtroAuto);
