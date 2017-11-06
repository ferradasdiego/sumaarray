"use strict"

/**
 * @fileOverview Este archivo contiene ejemplos de funciones con for
 * @author Diego Costas
 * @version 1.0
 * 
 */

/**
 * @description SumaArray suma los valores de un array
 * @param {Array} numeros se le introduce un array de números
 * @return {Number} devuelve un número
 */

 function SumaArray(numeros){
     let suma=0;
     for(let valor of numeros){
         suma=suma+valor;
     }
     return suma;
 }

 function SumaArray2(numeros){
     let suma=0;
     for(let pos in numeros){
         suma=suma+numeros[pos];
     }
     return suma;
 }

 function SumaArray3(numeros){
     let suma=0;
     for(let i=0;i<numeros.length;i++){
         suma=suma+numeros[i];
     }
     return suma
 }
/**
 * @description BuscarAlumno busca a un alumno en una lista de alumnos 
 * @param {Array} listaAlumnos lista alumnos
 * @param {Alumno} alumno alumno a buscar
 * @return {Boolean} devuelve si el alumno está en la lista o no
 */
function BuscarAlumno(listaAlumnos,alumno){
    let encontrado=false;
    for(let alum of listaAlumnos){
        if(alum.nombre==alumno.nombre && alum.apellidos && alumno.apellidos){
            encontrado=true;
        }
    }
    return encontrado;
}

let alumnos=[
    {
        nombre:"pepe",
        apellidos:"lopez"
    },
    {
        nombre:"juan",
        apellidos:"rodriguez"
    },
    {
        nombre:"alejandro",
        apellidos:"nannan"
    }
];

let alumno={
    nombre:"dassd"
    apellidos:"kdnjss"
};

 let sumaValor=SumaArray3([2,3,4,5]);

 console.log(BuscarAlumno);
 //esto es una prueba