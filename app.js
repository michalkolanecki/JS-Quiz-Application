const goodAnswers = ['c', 'c', 'b', 'b'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.question1.value, form.question2.value, form.question3.value, form.question4.value];
    // CHECKING ANWERS
    userAnswers.forEach((answer, index) => {
        if(answer === goodAnswers[index]){
            score += 25;
        }
    });
    // SHOW RESULT
    scrollTo(0,0);
    result.classList.remove('d-none');
    let animation = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${animation} %`;
        if(animation === score){
            clearInterval(timer);
        } else {
            animation++;
        }
    }, 10);
});