const altura = document.getElementById("altura");
const peso = document.getElementById("peso");
const boton = document.getElementById("submit");
const result = document.querySelector(".result");
const botonModal = document.getElementById("submit2");
const fondoModal=document.querySelector(".fondo_modal");
const botonCerrar=document.getElementById("cerrar");


boton.addEventListener("click", (e) => {
  result.innerHTML = "";
  e.preventDefault();
  const pesoNum = validarNumero(peso.value);
  const alturaNum = validarNumero(altura.value);
  pesoT=parseInt(peso.value)
  alturaT=parseInt(altura.value)

  if (alturaNum === true && pesoNum === true) {
    if (pesoT>1 && alturaT>1) {
      const resultadoo = convertirDataAResult(pesoT, alturaT);

      let data = document.createElement("P");
      data.innerHTML = `Tu IMC es de: ${resultadoo}`;
      console.log(data);
      result.appendChild(data);
    }else{
      alert("pone numeros down")
    }

  }else{
    alert("pone numeros down!!")
  }

  altura.value = "";
  peso.value = "";
});


function convertirDataAResult(pesoN, alturaN) {
  let imc = (pesoN / Math.pow(alturaN / 100, 2)).toFixed(2);
  return imc;
}


function validarNumero(numero) {
  if (!/^([0-9])*$/.test(numero)) {
    return false;
  } else {
    return true;
  }
}

botonModal.addEventListener("click",(e)=>{
    e.preventDefault()
    fondoModal.classList.remove('invisible');
    console.log(fondoModal)
})


botonCerrar.addEventListener("click",(e)=>{
    e.preventDefault()
    fondoModal.classList.add('invisible');
    console.log(fondoModal)

})