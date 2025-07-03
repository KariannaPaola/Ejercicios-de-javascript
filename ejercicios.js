/*Crea una funcion recursiva que basado en un array de notas, te muestre el promedio*/

let ArregloNotas=[20,19,16,20,18,19]

function promedioNotas(ArregloNotas, numero, acumulador=0){
  if(numero<ArregloNotas.length){
    acumulador= acumulador + ArregloNotas[numero];
    resultado= acumulador/ArregloNotas.length;
    if(numero===ArregloNotas.length-1){
      console.log("El promedio de notas es " + resultado);
    }  
  promedioNotas(ArregloNotas, numero + 1, acumulador);
  }
}
promedioNotas(ArregloNotas,0,0)

