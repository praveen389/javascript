let quizData=[
    {
        question:'which framework is related to javascript',
        a:'.NET Core',
        b:'Flask',
        c:'React JS',
        d:'Django',
        correct:'c'
    },
    {
        question:'which is not a programming language',
        a:'HTML',
        b:'python',
        c:"Java",
        d:'Javascript',
        correct:'a'
    },
    {
        question:'which is  not a framework',
        a:'Javascript',
        b:'React JS',
        c:'Django',
        d:'Angular',
        correct:'a'
    },
    {
        question:'CSS  stand for',
        a:'Cascading Style State',
        b:'Cascading Style Sheet',
        c:'Cascading Sheet State',
        d:'Cascading Shape Style',
        correct:'b'
    },
    {
        question:'Which is correct print statement in python',
        a:'printf("Hello World")',
        b:'printIn("Hello World")',
        c:'print("Hello World")',
        d:'print1n("Hello World")',
        correct:'c'
    }

];

let answer = document.querySelectorAll('.answer');

console.log(answer);

let question=document.getElementById('question');

let option_a=document.getElementById('a_value');

let option_b=document.getElementById('b_value');

let option_c=document.getElementById('c_value');

let option_d=document.getElementById('d_value');

let submitbtn =document.getElementById('submit');

let currentQuestion = 0;

let quizScore =0;

loadQuiz();

function loadQuiz(){

    deselect();
    question.innerHTML= quizData[currentQuestion].question;
    option_a.innerHTML= quizData[currentQuestion].a;
    option_b.innerHTML= quizData[currentQuestion].b;
    option_c.innerHTML= quizData[currentQuestion].c;
    option_d.innerHTML= quizData[currentQuestion].d;

}

function deselect()
{
    answer.forEach(ans => ans.checked= false);
}

submitbtn.addEventListener('click',() =>{

    // console.log("Submitted");

    let selectedOption;
    answer.forEach(answer =>{
     if(answer.checked){
        selectedOption=answer.id
     }
    });

    if(selectedOption === quizData[currentQuestion].correct)
    {
        quizScore = quizScore+1;
    }

    currentQuestion =currentQuestion +1;

    if(currentQuestion == quizData.length){
        document.getElementById('quizdiv').innerHTML=`
        <h1>
        Youhave answered ${quizScore} correctly out of
        ${quizData.length}.

        <br />
        <br />
        <a  style="background-color:dodgerblue;color:white; text-align:center"
        href= "index.html">Start agin</a>
        </h1>
        `;
    } else{
        loadQuiz();
    }
});
