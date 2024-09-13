var cont = 0
function alerta(){
       alert("Clicou no butao.")
       console.log("Você clicou no botao.")
}

function contador(){
    cont++
    alert("Contador: " + cont)
    if (cont >= 10){
        console.log("Voce excedeu os cliques para a pagina!!!")
    }
}

function mostrarMensagem(){
    document.getElementById("success").style.display = "block";
    document.getElementById(msg)
}