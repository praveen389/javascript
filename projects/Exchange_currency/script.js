const currencyE1_one =document.getElementById('currency-one');

const amountE1_one =document.getElementById('amount-one');

const currencyE1_two =document.getElementById('currency-two');

const amountE1_two =document.getElementById('amount-two');

const swap =document.getElementById('swap');

const rateE1 =document.getElementById('rate');


async function calculate()
{
    const currency_one =currencyE1_one.value;

    const currency_two =currencyE1_two.value;

    const response =await fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`);

    const data =await response.json();

    console.log(data);

    const rate =data.rates[currency_two];

    rateE1.innerText=`${currency_one} =${rate} ${currency_two}`;

    amountE1_two.value=(amountE1_one.value * rate).toFixed(2);


}

swap.addEventListener('click',()=>{

    const temp =currencyE1_one.value;

    currencyE1_one.value= currencyE1_two.value;

    currencyE1_two.value =temp;

    calculate();
});












//add event listener

currencyE1_one.addEventListener('change',calculate);

amountE1_one.addEventListener('input',calculate);

currencyE1_two.addEventListener('change',calculate);

amountE1_two.addEventListener('input',calculate);

calculate();