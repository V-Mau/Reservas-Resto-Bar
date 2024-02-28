//? EJERCICIO 1 ----- -----
function saludar(nombre: string){
    return(`Hola, ${nombre}! como estas?`)
}

const mensaje = saludar('Homero');
console.log(mensaje);

const nuevoMensaje: string = saludar('Mauricion');
console.log(nuevoMensaje);

//? EJERCICIO 2 ----- -----
// function suma(num1: number, num2: number) {
//     return num1 + num2;
//   }
//   console.log(suma(5, 3));
//   console.log(suma(9, 10));
// ? EJERCICIO 3 ---- -----

function esPar(numero: number){
    return numero % 2 === 0;
}

console.log(esPar(4));
console.log(esPar(3));
console.log(esPar(20));

// * Ejercicio 4----- ------

const nombre: string = 'Cintia';
const edad: number = 38;
const cuentaUser: boolean = true;

console.log(`Nombre: ${nombre}`);
console.log(`Edad: ${edad}`);
console.log(`Cuenta de usuari: `, cuentaUser);

// * Ejercicio 5 ---- -------------------------

function suma (numero1: number , numero2: number){
   return numero1 + numero2;
}
console.log('El resultado es:' ,suma(23,33));

function numAlCuadrado(num: number) {
    return num * num;

}

console.log('El cuadrado de 33 es:', numAlCuadrado(33));
console.log('El cuadrade 7 es:',numAlCuadrado(7));

// * Ejercicio 3 -----------------------------------------

const arrNum: number[] = [3,6,9];
function sumarArrNum(arrNum: number[]): number {
    let sumaTotal = 0;
    for(let i = 0; i< arrNum.length; i++){
          sumaTotal += arrNum[i];
          

    }
    return sumaTotal;
}
console.log( 'La suma del array es: ',sumarArrNum(arrNum));

// ? Ejercicio 4 -------------------------------------------------

type TLibro = {
    titulo: string,
    autor: string,
    año: number
}

type THarryPotter = TLibro & {
    
    genero: 'Fantasía'

}

const libroHarryPotter = {
    titulo:'La camara secreta',
    autor: 'J. K. Rowling',
    año: 1998,
    genero:'Fantasía'
}

type TDune = THarryPotter;
const libroDune = {
    titulo:'Dune',
    autor:'Frank Herbert',
    año:2021,
    genero:'sci-fi' 
}

console.log(libroHarryPotter,libroDune);

// * Ejercicio 5------------------------------------

class Animal {
    nombre: string
    
    constructor(nombre:string){

        this.nombre = nombre
        
        
    }
    hacerSonido(): void {
        console.log('Hacer algun sonido');
    }

    
}

class Perro extends Animal {

    raza: string;

    constructor(nombre:string, raza:string){



        super(nombre);
        this.raza = raza;
    }
    ladrar(): void {
        console.log('Wof Wof!!!');
    }
}

const miPerro = new Perro ('Tilin', 'Caniche')

console.log(miPerro);





const perro = new Animal('Tilin');

console.log(perro);

// todo/ Ejercicio 6 ---------------------------------

interface IAuto {
    marca: string,
    modelo: string,
    año: number
}


function propiedadAuto (auto: IAuto): void {
    console.log(`Marca: ${auto.marca}`);
    console.log(`Modelo: ${auto.modelo}`);
    console.log(`Año: ${auto.año}`);

}

const miAuto = {
    marca:'Chevrolet',
    modelo:'Aveo',
    año: 2013
}

const miOtroAuto = {
    marca:'Ford',
    modelo:'Rager',
    año:2021
}



propiedadAuto(miAuto)
propiedadAuto(miOtroAuto)


