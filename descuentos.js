

const cupones = [
  {text:"CUPON-1", discount:0.2}, 
  {text:"CUPON-2", discount:0.3}, 
  {text:"CUPON-3", discount:0.5}
  ]

function calcularDescuento(){
    const inputPrice = document.getElementById('inputPrice')
    const valuePrice = inputPrice.value
    const inputDiscount = document.getElementById('inputDiscount')
    const valueDiscount= inputDiscount.value
    
    const inputCoupon = document.getElementById('inputCoupon')
    const valueCoupon= inputCoupon.value
    
    let finalResult = valuePrice - (valuePrice*(valueDiscount/100))

    cupones.map((cupon)=>{
      if(cupon.text===valueCoupon){
        finalResult = finalResult - (valuePrice*(cupon.discount))
      }

    })
    console.log({
      precio: valuePrice,
      descuento: valueDiscount,
      resultado :finalResult

    })
    const resultado = document.getElementById('result')
    resultado.innerText = `EL precion final es: $ ${finalResult}`
}