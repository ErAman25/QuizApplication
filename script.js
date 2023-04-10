const questions = [
    {
        'que': 'which of the following is a markup language?',
        'a': "HTML",
        'b': "CSS",
        'C': "JS",
        'd': "PHP",
        'correct': "a",
    },


    {
        'que': 'What year is JavaScript is launched?',
        'a': "1996",
        'b': "1998",
        'C': "1995",
        'd': "None Of These",
        'correct': "C",
    },

    {
        'que': 'What does CSS stands for?',
        'a': "JavaScript",
        'b': "Cascading style sheet",
        'C': "Computer Style sheet",
        'd': "Common Style sheet",
        'correct': "b",
    },

]

let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const QueBox = document.getElementById("QueBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if(index === total) {
        return endQuiz()
    }
    reset()
    const data = questions[index]
    QueBox.innerText = `${index + 1})${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.C;
    optionInputs[3].nextElementSibling.innerText = data.d;

}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}


const getAnswer = () => {
    let answer ;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
              answer = input.value;
            }
        }
    )
    return answer
}


const reset = () => {
    optionInputs.forEach(
        (input) => {
          input.checked = false;
        }
    )
}

const endQuiz = () => {
document.getElementById("box").innerHTML = `
<div style="text-align:center">
<h2> Thank you For Playing Quiz </h2>
<h3> ${right} / ${total} are correct </h3>
</div>
`

}



loadQuestion();