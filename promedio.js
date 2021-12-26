const lista1= [
  120,200,300,560,20,40,34
]

function calcularMediaAritmetica(){
  const sumaLista = lista1.reduce((valorAcumulado=0, nuevoElemento)=>{
    return valorAcumulado+nuevoElemento
  })
  //let sumaLista=0
  // lista1.map(item=>{
  //   sumaLista += item
  // })
  const promedio=sumaLista/lista1.length
  console.group("Media Aritmetica")
  console.log(`La media aritmetica es: ${promedio}`)
  console.groupEnd()
}

calcularMediaAritmetica()