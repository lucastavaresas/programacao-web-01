function log() {
  alert(
    "Ola " +
      document.getElementById("name").value +
      " " +
      document.getElementById("lastname").value
  );
}

document.getElementById("button").onclick = log;

document.getElementById("name").addEventListener("click", () => {
    document.getElementById("name").value = "";
});

document.getElementById("lastname").addEventListener("click", () => {
    document.getElementById("lastname").value = "";
});