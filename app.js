document.getElementById('question-answer').addEventListener('click', showAnswer)
const questions = document.querySelectorAll('.question-answer')
function showAnswer(e){
    if(e.target.className === 'arrow-down'){
        questions.forEach((question) => {
            if (e.target.parentElement.parentElement != question){
                question.classList.remove('show-answer')
            }
        })
        e.target.parentElement.parentElement.classList.toggle('show-answer')
    }   
}