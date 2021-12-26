const salariosCol =  colombia.map(item=>{
  return item.salary
})

const salariosColSort = salariosCol.sort((a,b)=>(a-b))
console.log(salariosColSort)

function medianaSalarios(lista){
  const mitad = parseInt(lista.length / 2)

  if(lista.length % 2 == 0){ //si es par
    const promedio =( lista[mitad] + lista[mitad-1] ) / 2
    return promedio
  }else{
    const promedio = lista[mitad]
    return promedio
  } 
}
//Media top 10%
const spliceStart = parseInt(salariosColSort.length * 0.9)
const spliceCount = salariosCol.length - spliceStart
const salariosColTop10 = salariosCol.splice(spliceStart, spliceCount)
const medSalTop10 = medianaSalarios(salariosColTop10)
console.log({
  mediana: medianaSalarios(salariosColSort),
  medianaSalariosTop10:medSalTop10
}

)