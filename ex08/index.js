document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("result").innerHTML = "";
  let value = document.getElementById("value").value;
  const notas = [100, 50, 20, 10, 5, 2, 1];
  for (let nota of notas) {
    const qtd = parseInt(value / nota);
    value = value % nota;
    document.getElementById(
      "result"
    ).innerHTML += `${qtd} nota(s) de ${nota} <br>`;
  }
});
