document.getElementById("boton2").style.visibility = "hidden";
document.getElementById("tit").style.visibility = "hidden";
const contar = () => {
    document.getElementById("boton2").style.visibility = "visible";
    document.getElementById("tit").style.visibility = "visible";
    document.getElementById("formulario").addEventListener("submit", (event) => {
      event.preventDefault();
    });
  
    let inputValue = document
      .getElementById("alfanum")
      .value.trim()
      .toLowerCase()
      .split("");
  
    const cont = {};
  
    inputValue.forEach((element) => {
      cont[element] = (cont[element] || 0) + 1;
    });
  
    for (let letters in cont) {
      const result = `${letters} : ${cont[letters]}<br>`;
      document.getElementById("result").innerHTML += result;
    }
  };
  
  const limpiar = () => {
    document.getElementById("boton2").style.visibility = "hidden";
    document.getElementById("tit").style.visibility = "hidden";
    document.getElementById("alfanum").value = " ";
    document.getElementById("result").innerHTML = " ";
  };
