
const notas=[{
  nota:1.3,
  creditos:2
},
{
  nota:3.3,
  creditos:1
},
{
  nota:4.3,
  creditos:4
},
{
  nota:3.6,
  creditos:3
}]

let dividendo = 0
let divisor = 0

notas.map(item=>{
  dividendo += item.nota * item.creditos
  divisor +=item.creditos
})
const promedio=dividendo / divisor

console.log(`El promedio ponderado es: ${promedio
}`)