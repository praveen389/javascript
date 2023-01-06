const word = document.getElementById('word');

const text =document.getElementById('text');

const scoreEl = document.getElementById('score');

const timeEl =document.getElementById('time');

const endgameE1 =document.getElementById('end-game-container');

const settingbtn =document.getElementById('settings-btn');

const settings =document.getElementById('settings');

const settingsForm =document.getElementById('settings-form');

const difficultySelect =document.getElementById('difficulty');


// List of Words

const words =[
    'sing',
    'tense',
    'favorite',
    'pies',
    'food',
    'airplane',
    'dependent',
    'bad',
    'material',
    'superficial',
    'destiny',
    'faith',
    'love',
    'disturd',
    'confidense',
    'visit',
    'compitation',
    'convinience',
    'devali',
    'dassara',
    'darg',
    'radiculous',
    'feebel',
    'elude',
    'incorrect',
    'dimenstion',
    'incorporate',

];

let randomWord;

let score =0;

let time =10;

// set difficulty to value in localstorage

let difficulty =localStorage.getItem('difficulty') !=null ? localStorage.getItem('difficulty') :'medium';

// console.log(difficulty);
difficultySelect.value=localStorage.getItem('difficulty') !=null ? localStorage.getItem ('difficulty') :'medium';
// console.log(difficultySelect.value);

const timeInterval =setInterval(updateTime,1000);

function getRandomWord()
{
    return words[Math.floor(Math.random() * words.length)];
}

function addWordToDOM()
{
    randomWord = getRandomWord();
    word.innerHTML =randomWord;
}

function updateScore()
{
 score++ ;
 scoreEl.innerHTML =score;
}

// updateTime
function updateTime(){
    time--;
    timeEl.innerHTML =time +'s';
    if(time ===0)
    {
        clearInterval(timeInterval);
        gameOver();
    }
}

function gameOver(){
    endgameE1.innerHTML=`
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>
    `;
    text.value='';
    endgameE1.style.display ='flex';
}
addWordToDOM();

text.addEventListener('input' , e =>{

    const insertedText =e.target.value;

    if(insertedText ===randomWord){
        addWordToDOM();
        updateScore();
        e.target.value ='';

        if (difficulty ==='hard'){
            time +=2;
        }else if(difficulty ==='medium'){
            time += 3;
        }else{
            time += 5;
        }
        updateTime();
    }
});

settingbtn.addEventListener('click', ()=>settings.classList.toggle('hide'));

settingsForm.addEventListener('change' , e=>{
    console.log(e.target.value);

    difficulty =e.target.value;

    console.log(difficulty);

    localStorage.setItem('difficulty' , difficulty);
});