// if statement checking for single statement

let x=25;
if(x>10)
{
    console.log("value of x is greater than 10");


}

if(1=="1"){
    console.log("1 is equal to 1");


}

const a=25;

const b=35;

if(a <b){
    console.log(`${a} is less than ${b}`);

}


// else statement for checking two conditions


let x=25;
if(x>10)
{
    console.log("value of x is greater than 10");


} else{
    console.log("value of x is less than 10")
}

if(1=="1"){
    console.log("1 is equal to 1");


}else{console.log("1 is not equal to 1")}

const a=25;

const b=35;

if(a <b){
    console.log(`${a} is less than ${b}`);

}else{
    console.log{`${a} is not less than ${b}`};
}


let a=35;

if(a ===10){
    console.log("a is a equal to 10");
}

else if(a ==35){
    console.log("a is a equal to 35");
}

else if(a ==45){
    console.log("a is a equal to 45");
}
else{
    console.log("a is a equal to 10 ,35 and 45");
}

let marks=parseIntprompt("please enter marks:")

console.log(marks, typeof marks);

if (marks>=85 && marks <=100){
    console.log("congrates !!! you scored Grade A");

}

else if(marks>=60 && marks<85){
    console.log("you scored Grade B+");
}

else if(marks>=40 && marks<60){
    console.log("you scored Grade B");
}
else if(marks>=35 && marks<40){
    console.log("you scored Grade C");
}
else{
    console.log("sorry you failed this time . please try again to clear...");
}


// switch case

// the switch is evaluated once , then the value of the expression is compared with
// the value of each case. if there is a match, then the associated block of code is executed
// other wise if no match then the default code is executed

//break 
// when javascript reaches break keyword it braks completely out of the switch block
// which means it will stop the excution inside the switch block , the default keyword
// specifies the code to run if there is no case match.
//syntax

switch(exp){
    case 1://statements;
           break;
    case 2://statements;
          break;  
          case 3://statements;
          break;  
          case N://statements;
          break;  
          default: //statements;       

}


// switch case example 1:

let number1=parseInt(prompt("please type number from 1 to 5:"));

switch(number1){
    case 1:console.log("you got number 1");
    break;
    case 2:console.log("you got number 2")
    break;
    case 3:console.log("you got number 3")
    break;
    case 4:console.log("you got number 4")
    break;
    case 5:console.log("you got number 5")
    break;
    default:console.log("Numbers are not matching .. please type from number 1 to number 5 ");


}

// switch case example 2:

console.log("Food Menu Base on Day:Please type day to check menu:")

let day=promt("please type any day from monday to suday:");

switch(day){
    case "Monday":
        console.log("monday food preparation");
        console.log("Gobi Manchurian");
        console.log("Dal Recipe");
        break;
     case "wednesday":
        console.log("wednesday food preparation");
        console.log("paneer recipe");
        console.log("Alo Paratha");
        break;
    case "thursday":
            console.log("thursday food preparation");
            console.log("muchroom recipe");
            console.log("dal  makhani receope");
            break;   

            case "friday":
                console.log("friday food preparation");
                console.log("chole  recipe");
                console.log("Alo Paratha");
                break;   
                
                case "saturday":
        console.log("saturday food preparation");
        console.log("boiled  recipe");
        console.log("veg Paratha");
        break;

        case "sunday":
            console.log("saturday and sunday food preparation");
            console.log("boiled  recipe");
            console.log("veg Paratha");

            default: console.log("not a valid day , please type the day correctly...")



}



