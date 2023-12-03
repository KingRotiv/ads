const formCalcular = document.querySelector("#formCalcular")
const divResultado = document.querySelector("#divResultado")
const resultado = document.querySelector("#resultado")

function calcular(e) {
    const form = new FormData(formCalcular)
    let valorCalculado = null;
    let valor1 = form.get("valor1")
    let valor2 = form.get("valor2")
    const op = form.get("op")

    if((valor1 != "") && (valor2 != "")){
        valor1 = parseFloat(valor1)
        valor2 = parseFloat(valor2)
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
}