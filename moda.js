const lista3= [
  120,20,23,20,20,30,56,20,40,2,3,1,3,1,2,4,51,2,31,513,511
]
const listaCount={}
lista3.map(item=>{
  if(listaCount[item]){
    listaCount[item] +=1
  }else{
    listaCount[item] = 1
  }
})

const listaArray = Object.entries(listaCount).sort(function(a, b){return b[1] - a[1]}) //convierte el objeto en lista y la organiza con sort

const frecMax = listaArray[0][1]

let suma=0
let contador=0
listaArray.map(item=>{
  
  if(item[1] === frecMax){
    suma += parseFloat(item[0])
    contador +=1
  }
})
const moda = suma/contador

console.group("Moda")
// console.log(listaCount)
// console.log(frecMax )
console.log(`La moda es: ${moda}` )

console.groupEnd()