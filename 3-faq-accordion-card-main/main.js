const questions = document.querySelectorAll('.question')

questions.forEach((question) => {
    question.addEventListener('click', () => {
        //console.log(question.parentNode.classList)
       element = question.parentNode.classList.contains('active')
       console.log(`elemento clicado: ${element}`)

        if (element === false) {
            question.parentNode.classList.add('active')
        } else {
            question.parentNode.classList.remove('active')
        }
      
    })
})