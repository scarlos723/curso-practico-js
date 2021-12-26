const lista2= [
  120,200,300,560,20,40,50,1
]
const mitad = parseInt(lista2.length / 2)

const lista2Ordenada = lista2.sort(function(a, b){return b - a})

console.group("Mediana")
console.log("lista ordenada", lista2Ordenada.reverse())
if(lista2Ordenada.length % 2 === 0){
  console.log(`la lista es par, los elemntos de la mitad son ${lista2Ordenada[mitad]} y ${lista2Ordenada[mitad-1]}`)
  console.log(`la mediana es: ${(lista2Ordenada[mitad] + lista2Ordenada[mitad-1])/2}`)
}else{
  console.log("la lista es impar, la mediana es ", lista2Ordenada[mitad])
}
console.groupEnd()