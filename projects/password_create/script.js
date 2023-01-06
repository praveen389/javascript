const rangeCharacters= document.getElementById("range-char");

const numberCharacters= document.getElementById("number-char");

const formContainer= document.getElementById('password-form');

const numbersE1 = document.getElementById('number');

const symbolsE1= document.getElementById('symbols');

const passwordE1 = document.getElementById('password');

const upperCaseE1 = document.getElementById('uppercase');

const passwordDisplay = document.getElementById('password-display');

const lowercaseCharCodes = arrayLowToHigh(97,122);

const numberCharCodes = arrayLowToHigh(48,57);

const symbolCharCodes = arrayLowToHigh(33,47).concat(58,64).concat(91,96).concat(123,126);

const uppercaseCharCodes = arrayLowToHigh(65,90);


// Synchronizingrange and number inputs 

rangeCharacters.addEventListener("input",syncCharAmount);

numberCharacters.addEventListener("input",syncCharAmount);




// Character Code


function syncCharAmount(e)
{
 const valueAmount = e.target.value;
 console.log(valueAmount);

 rangeCharacters.value =valueAmount;
 numberCharacters.value = valueAmount;
}

// Generating the password when the form is submitted

formContainer.addEventListener("submit", function(e)
{
 e.preventDefault();

 const characterAmount = numberCharacters.value;

 const includeNumbers = numbersE1.checked;

 const includesSymbols =symbolsE1.checked;

 const includeUppercase = upperCaseE1.checked;

  console.log (characterAmount , includeNumbers , includesSymbols, includeUppercase);

 const password = generatePassword(characterAmount, includeNumbers,includesSymbols,includeUppercase);

 console.log(password);

 passwordDisplay.innerText=password;

});

// Generate password
function generatePassword(characteramount , includeNumber,includesSymbols,includeUppercase)
{
  let charCodes= lowercaseCharCodes;

  if(includeNumber)
  {
    charCodes = charCodes.concat(numberCharCodes);
  }
  if(includesSymbols)
  {
    charCodes = charCodes.concat(symbolCharCodes);
  }
  if (includeUppercase)
  {
    charCodes = charCodes.concat(uppercaseCharCodes);

  }

  // console.log(charCodes);

  const passwordCharacters =[];

  for (let x=0; x< characteramount; x++)
  {
    let characterCodes =charCodes[Math.floor(Math.random() * charCodes.length)];

    passwordCharacters.push(String.fromCharCode(characterCodes));

  }

  return passwordCharacters.join("");


}

// character code 
function arrayLowToHigh(Low,high)
{
    let array=[];

    for(let i=Low; i<=high; i++)
    {
      array.push(i);
    }
    return array;
}





