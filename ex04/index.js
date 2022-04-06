function log() {
    alert("Ola " + document.getElementById("name").value);
}

document.getElementById("button").onclick = log;