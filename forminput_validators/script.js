const usernameInput =document.querySelector('#username');
const passwordInput =document.querySelector("#password");


//8 non numeric , it is followed by 2 digit

const formInputValidator =/^(?=\D{8})(?=\D*\d{2})/;

usernameInput.addEventListener("input",validate);
passwordInput.addEventListener("input",validate);

function validate(e){
    
    if(e.target.id ==="username")
    {
        if(e.target.value.length >3){
            e.target.classlist.add("valid");
            e.target.classlist.remove("invalid");
        } else {
            e.target.classlist.add("invalid");
            e.target.classlist.remove("valid");
        }
    }

    if( e.target.id ==="password"){
        if(formInputValidator.test(e.target.value))
        {
            e.target.classlist.add("valid");
            e.target.classlist.remove("invalid"); 
        } else {
            e.target.classlist.add("invalid");
            e.target.classlist.remove("valid");
        }
    }
}