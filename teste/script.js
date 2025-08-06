function consultar() {
  const codigo = document.getElementById("codigo").value.trim();
  const resultado = document.getElementById("resultado");

  if (!codigo) {
    resultado.innerHTML = "Digite um código válido.";
    return;
  }

  fetch(`https://script.google.com/macros/s/AKfycbwKhoRZRJ6HMYsW-AscNyoGXTwnp5umwAeQBONKKIrI6e2t15hWTwchNdifyc3z2_y_/exec=${codigo}`)
    .then(response => response.text())
    .then(data => {
      resultado.innerHTML = data;
    })
    .catch(err => {
      resultado.innerHTML = "Erro ao buscar dados.";
      console.error(err);
    });
}
