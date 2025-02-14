let lampada = document.getElementById("lampada")
let estadoLampada = "desligada"
function ligar() {
    if (!(estadoLampada == "quebrada")) {
        estadoLampada = "ligada"
        lampada.src = "./IMG/ligada.jpg"
    }
}

function desligar() {

    if (!(estadoLampada == "quebrada")) {
        estadoLampada = "desligada"
        lampada.src = "./IMG/desligada.jpg"
    }

}

lampada.addEventListener("dblclick", () => {
    lampada.src = "./IMG/quebrada.jpg"
    estadoLampada = "quebrada"
})

lampada.addEventListener("mouseover", () => {
    if (!(estadoLampada == "quebrada")) {
        estadoLampada = "ligada"
        lampada.src = "./IMG/ligada.jpg"
    }

})

lampada.addEventListener("mouseleave", () => {
    if (!(estadoLampada == "quebrada")) {
        estadoLampada = "desligada"
        lampada.src = "./IMG/desligada.jpg"
    }


})