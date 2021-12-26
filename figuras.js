
function calcularPerimetroCuadrado(){
  const input = document.getElementById('inputCuadrado');
  const value = input.value
  const perimetroCuadrado =  value*4

  window.alert(`Perimetro del cuadrado = ${perimetroCuadrado}`)
}
function calcularAreaCuadrado(){
  const input = document.getElementById('inputCuadrado');
  const value = input.value

  const areaCuadrado =  Math.pow(value,2)



  window.alert(`Area del cuadrado = ${areaCuadrado}`)
}
function calcularPerimetroTriangulo(){
  const input1 = document.getElementById('inputTrianguloLado1');
  const value1 = input.value
  const input2 = document.getElementById('inputTrianguloLado2');
  const value2 = input.value
  const input3 = document.getElementById('inputTrianguloBase');
  const value3 = input.value
  const perimetroTriangulo = toString(value1) + toString(value2) +  toString(value3)
}
function calcularAreaTriangulo(){
  const input1 = document.getElementById('inputTrianguloLado1');
  const lado1 = input1.value
  const input2 = document.getElementById('inputTrianguloLado2');
  const lado2 = input2.value
  const input3 = document.getElementById('inputTrianguloBase');
  const base = input3.value

  if(lado1 === lado2){
    const altura = Math.sqrt( Math.pow(lado1,2)- Math.pow((base/2),2) )
    const areaTriangulo = (base * altura) / 2
    window.alert(`El area del triangulo isosceles es: ${areaTriangulo}`)
  }else{
    window.alert("el triangulo NO! es isosceles")
    
  }
  
}

function calcularPerimetroCirculo(){
  const input = document.getElementById('inputCirculo');
  const radio = input.value
   const perimetroCirculo = Math.PI * 2 * radio

  window.alert(`Perimetro del Circulo = ${perimetroCirculo}`)
}
function calcularAreaCirculo(){
  const input = document.getElementById('inputCirculo');
  const radio = input.value

  const areaCirculo = Math.PI * Math.pow(radio , 2)

  window.alert(`Area del Circulo = ${areaCirculo}`)
}


