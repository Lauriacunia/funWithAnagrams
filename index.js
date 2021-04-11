
/*Diversion con anagramas
Dos cadenas son anagramas si son permutacioes entre si. 
En otras palabras, ambas cadenas tienen el mismo tamaño y los mismos caracteres.
Por ejemplo: "aaagmnrs" es un anagrama de "anagramas"
Dada una matriz de cadenas, elimine cada cadena que sea un anagrama de una cadena
anterior, luego devuelva la matriz restante en ordenada.

Ejemplo : 

entrada  [`code`, `doce`, `ecod`, `framer`, `frame`];
salida esperada ['code','frame','framer']

*/

let str = [`code`, `doce`, `ecod`, `framer`, `frame`];

let funWithAnagrams = (array)=>{
    for(let i=0;i<array.length;i++){
      for(let j=array.length-1;j>i;j--){
        let subcadenaA = array[i].split("").sort().join("")
        let subcadenaB = array[j].split("").sort().join("")
        if(subcadenaA===subcadenaB){
          array.splice(j,1)
        }
      }
    }
    return array.sort()
  }

console.log(funWithAnagrams(str))

