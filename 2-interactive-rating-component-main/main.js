const lis = document.querySelectorAll('li')
const btnSubmit = document.querySelector('button')
const cards = document.querySelectorAll('.card')


function rating(element) {
  const paragraphSpan = document.querySelector('.rating span')
  paragraphSpan.innerHTML = element
}


for(let i = 0; i < lis.length; i++) {
    const selectLi = lis[i]
    selectLi.addEventListener('click', () => {
        selectLi.classList.toggle('newLi')
        const numberLi = selectLi.textContent
        console.log(numberLi)
        rating(numberLi)
    })
}




btnSubmit.addEventListener('click', () => {
    cards[0].classList.add('hidden')
    cards[1].classList.remove('hidden')
    // rating()
})