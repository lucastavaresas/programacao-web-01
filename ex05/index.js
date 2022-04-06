function log() {
    alert("Ola " + document.getElementById("name").value + " " + document.getElementById("lastname").value);
}

document.getElementById("button").onclick = log;