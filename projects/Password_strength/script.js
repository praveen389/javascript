const strenghter =document.querySelector(".strenghter");

const passwordInput =document.querySelector('input[type="text"]');

const passwordCheck =document.querySelector(".password-check");

passwordInput.addEventListener("input",updateStengther);

function updateStengther()
{
    let assesments = calculatePasswordStrength(passwordInput.value);
    let strength =100;
    passwordCheck.innerHTML ="";
    assesments.forEach((assesment)=>{
        if (assesment ==null) return;

        strength -=assesment.strengthLost;
        const pwdCheckE1 =document.createElement("p");
        pwdCheckE1.innerHTML=assesment.pwdCheck;
        passwordCheck.appendChild(pwdCheckE1);
    });
    strenghter.style.setProperty("--strength-amount",strength);

}

function calculatePasswordStrength(password)
{
    const assesment =[];
    assesment.push(lengthAssessment(password));
    assesment.push(LowercaseAssessment(password));
    assesment.push(uppercaseAssessment(password));
    assesment.push(numberAssessment(password));
    assesment.push(specialCharacterAssesment(password));
    assesment.push(repeatCharactersAssessment(password));
    return assesment;
}

function lengthAssessment(password)
{
    const length =password.length;
    
    if(length <= 5)
    {
        return{
            pwdCheck:"Password is too short",
            strengthLost:40,
        };
    }

    if(length <= 10)
    {
        return {
            pwdCheck: "Password could be longer",
            strengthLost:15
        };
       
    }

}


// Lowercase Character Assesment function

function LowercaseAssessment(password)
{
    return characterTypeAssessment(password,/[a-z]/g,"lowercase characters");

}

//uppercase character assessment function

function uppercaseAssessment(password)
{
    return characterTypeAssessment(password,/[A-Z]/g,"uppercase characters");
}

// Number Assesment function

function numberAssessment(password)
{
    return characterTypeAssessment(password,/[0-9]/g,"numbers");

}

//special character assesment 

function specialCharacterAssesment(password){
    return characterTypeAssessment(password,/[^0-9a-zA-Z\s]/g,"specialcharacters");
}

//character Type Assessment function

function characterTypeAssessment(password,regex,assessmentType)
{
    const characterMatch =password.match(regex) || [];

    if(characterMatch.length ==0){
        return{
            pwdCheck:'Password has no ${assesmentType}',
            strengthLost:20,

        };

    }
    if(characterMatch.length <=2)
    {
        return{
            pwdCheck: `Password must have more than ${assessmentType}`,
            strengthLost:5,
        };
    }
}

function repeatCharactersAssessment(password)
{
    const repeatCharMatch=password.match(/(.)\1/g)||[];

    if(repeatCharMatch.length>0)
    {
        return {
            pwdCheck:"Password has repeat characters",
            strengthLost:repeatCharMatch.length *10,
        };
    }
}