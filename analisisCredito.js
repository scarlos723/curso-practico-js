
function calcularCapacidad(){
  const valueIngresosMes = document.getElementById('inputIngresosMes').value
  const valueGastosMes = document.getElementById('inputGastosMes').value
  const valuePorcentaje = document.getElementById('inputPorcentaje').value
  
  
  let nivelEndeudamiento = 0
  let capacidad = 0

  if(valueGastosMes && valueIngresosMes){
    nivelEndeudamiento = (valueGastosMes / valueIngresosMes)
    capacidad = (valueIngresosMes-valueGastosMes)*(valuePorcentaje/100)
    
  }else{
    window.alert("Por favor diligencia todos los campos")
  }
  const pResultado = document.getElementById('resultado')
  if (nivelEndeudamiento < (valuePorcentaje/100)){
    console.log('Si tienes capacidad de endeudamiento')
    pResultado.innerText=`Si tienes capacidad de endeudamiento, puedes pedir un prestamo por $${capacidad}`
  } else{
    pResultado.innerText=`No tienes capacidad de endeudamiento, ya que el porcentaje de endeudamiento supera el ${valuePorcentaje}%`
    console.log('No tienes capacidad de endeudamiento')
  }
    
  

  console.log({
    ingresosMes:valueIngresosMes,
    gastoMes: valueGastosMes,
    porcentaje: valuePorcentaje,
    capacidad: capacidad,
    nivelDeEndeudamiento: nivelEndeudamiento

  })
}