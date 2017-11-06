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

 let sumaValor=SumaArray3([2,3,4,5]);

 console.log(sumaValor);
 //esto es una prueba