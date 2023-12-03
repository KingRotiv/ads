const formCalcular = document.querySelector("#formCalcular")
const divResultado = document.querySelector("#divResultado")
const resultado = document.querySelector("#resultado")
formCalcular.addEventListener(
    "submit",
    calcular
)

function calcular(e) {
    e.preventDefault()
    const form = new FormData(e.target)
    let valorCalculado = null;
    const valor1 = parseFloat(form.get("valor1"))
    const valor2 = parseFloat(form.get("valor2"))
    const op = form.get("op")

    if(op == "som") {
        valorCalculado = valor1 + valor2
    } else if(op == "sub"){
        valorCalculado = valor1 - valor2
    } else if(op == "mul"){
        valorCalculado = valor1 * valor2
    } else{
        valorCalculado = valor1 / valor2
    }

    resultado.innerHTML = valorCalculado.toString()
    divResultado.hidden = false
}