const goodAnswers = ['c', 'c', 'b', 'b'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    let score = 0;
    const userAnswers = [form.question1.value, form.question2.value, form.question3.value, form.question4.value]
    
    // CHECKING ANWERS
    userAnswers.forEach((answer, index) => {
        if(answer === goodAnswers[index]){
            score += 25;
        }
    });
    // SHOW RESULT
    result.querySelector('span').textContent = `${score} %`;
    result.classList.remove('d-none');
});