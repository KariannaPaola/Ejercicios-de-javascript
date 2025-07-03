/*Crea una funcion recursiva que basado en un array de notas, te muestre el promedio*/

let arregloNotas=[18,18,20,16,18,17]

function promedioNotas(notas, numero, acumulador=0){
  if(numero<notas.length){
    acumulador= acumulador + notas[numero];
    resultado= acumulador/notas.length;
    if(numero===notas.length-1){
      console.log("El promedio de notas es " + resultado);
    }  
  promedioNotas(notas, numero + 1, acumulador);
  }
}
promedioNotas(arregloNotas,0,0)

