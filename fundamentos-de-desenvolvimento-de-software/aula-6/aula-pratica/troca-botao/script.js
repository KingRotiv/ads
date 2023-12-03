const botao1 = document.querySelector("#botao1")
const botao1Clone = botao1.cloneNode(true)
let contCliques = 0

let botaoQuebrado = false

if(!botaoQuebrado){
    botao1.addEventListener(
        "mouseover",
        e => {
            botao1.style.background = "green"
        }
    )
    botao1.addEventListener(
        "mouseout",
        e => {
            botao1.style.background = "blue"
        }
    )
    botao1.addEventListener(
        "click",
        e => {
            contCliques++
            if(contCliques == 10){
                botao1Clone.disabled = true
                botao1Clone.textContent = "Quebrei"
                botao1Clone.style.background = "red"
                botao1.parentNode.replaceChild(botao1Clone, botao1) // Substitui o botao1 pelo botao1Clone
                botaoQuebrado = true
            }
        }
    )
}