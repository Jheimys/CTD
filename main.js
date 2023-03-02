const controle = document.querySelectorAll('.controle') //Seleciona todas as div de controle

controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        // console.log(evento.target.dataset.controle) 
        // console.log(evento.target.parentNode)
        controlaDados(evento.target.dataset.controle, evento.target.parentNode )
    })
})

function controlaDados (sinal, valorContador) {

    const valorDoContador = valorContador.querySelector('[data-contador]')

    if(sinal === '-') {
        valorDoContador.value = parseInt( valorDoContador.value) - 1
    } else {
        valorDoContador.value = parseInt( valorDoContador.value) + 1
    }
}
