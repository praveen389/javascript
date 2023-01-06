const main =document.getElementById('main');

const addUserBtn =document.getElementById('add-user');

const doubleBtn =document.getElementById('double');

const showMillionairesBtn =document.getElementById('show-millionaries');

const sortBtn =document.getElementById('sort');

const calculateWealthBtn =document.getElementById('calculate-wealth');

let data =[];

getRandomUser();

async function  getRandomUser(){
   
    const res =await fetch('https://randomuser.me/api');

    console.log(res);

    const data = await res.json();

    console.log(data);

    console.log(data.results);

    const user =data.results[0];

    const newUser ={
    
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random()*1000000)
    };

    addData(newUser);
    


}

//double money function

function doubleMoney(){

    data =data.map(user =>{

        return{ ...user, money: user.money * 2 };
    });

    updateDOM();
}

//sort user by richest

function sortByRichest(){
    
    data.sort((x,y)=> y.money - x.money);

    updateDOM();
}

//calculate the total wealth

function calculateWealth(){
    const wealth =data.reduce((acc,currUser)=>(acc +=currUser.money),0);

    console.log(wealth);

    const wealthE1=document.createElement('div');

    wealthE1.innerHTML =`
    <h3>Total Wealth :<strong>${formatNumber(wealth)}</strong></h3>
    `;

    main.appendChild(wealthE1)
}

//show millionaries

// function showMillionaires(){
//     data =data.filter(user =>user.money>1000000)
// }


//Add new obj to data array

function addData(obj)
{
    data.push(obj);

    updateDOM();

}

//format number as money

function formatNumber(number){

    return '₹' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
}

//Update DOM

function updateDOM(provideData =data){

    main.innerHTML='<h2><strong>Person</strong>Wealth</h2>';

    provideData.forEach(item =>{

        const element =document.createElement('div');

        element.classList.add('person');

        element.innerHTML=`<strong>${item.name}</strong> ${formatNumber(item.money)}`;

        main.appendChild(element);

    });
}


//Event Listener

addUserBtn.addEventListener('click',getRandomUser);

doubleBtn.addEventListener('click',doubleMoney);

sortBtn.addEventListener('click',sortByRichest);

// showMillionairesBtn.addEventListener('click')

calculateWealthBtn.addEventListener('click',calculateWealth);


