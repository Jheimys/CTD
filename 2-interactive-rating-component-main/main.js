const lis = document.querySelectorAll('li') //Seleciona todas as Lis
const btnSubmit = document.querySelector('button') //Seleciona o botão
const cards = document.querySelectorAll('.card') // Selecina as divs de classe card

function rating(element) {
 //selecina o span que está dentro do paragráfo de classe 'rating' 
  const paragraphSpan = document.querySelector('.rating span')
  paragraphSpan.innerHTML = element  //Adiciona o valor da li selecionada dentro so span
}

for(let i = 0; i < lis.length; i++) {          //Percorre todas as lis
    const selectLi = lis[i]                    //Seleciona as lis de acordo com sua posição
    selectLi.addEventListener('click', () => { //adiciona uma evento de click em cada li
        selectLi.classList.toggle('newLi')     //adiciona e remove a classe newLi com o  click
        const numberLi = selectLi.textContent  //seleciona o elemento da li clicada
        rating(numberLi)                       //Chama a função rating()
    })
}


btnSubmit.addEventListener('click', () => {  //adiciona o eveneto de click no botão submit
    cards[0].classList.add('hidden')         // adiciona a classe hidden na primeira div
    cards[1].classList.remove('hidden')     // remove a classe hidden na segunda div
})