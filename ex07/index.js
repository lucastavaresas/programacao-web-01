document.getElementById("btn").addEventListener("click", () => {
  const firstNumber = document.getElementById("firstNumber").value;
  const secondNumber = document.getElementById("secondNumber").value;
  document.getElementById(
    "soma"
  ).innerHTML = `${firstNumber} + ${secondNumber} = ${
    parseInt(firstNumber) + parseInt(secondNumber)
  }`;
  document.getElementById(
    "menos"
  ).innerHTML = `${firstNumber} - ${secondNumber} = ${
    parseInt(firstNumber) - parseInt(secondNumber)
  }`;
  document.getElementById(
    "multi"
  ).innerHTML = `${firstNumber} * ${secondNumber} = ${
    parseInt(firstNumber) * parseInt(secondNumber)
  }`;
  document.getElementById(
    "pot"
  ).innerHTML = `${firstNumber} ** ${secondNumber} = ${
    parseInt(firstNumber) ** parseInt(secondNumber)
  }`;
});
