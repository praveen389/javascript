class Person{
    #personName;
    #age;
    #personphone;

    setPersonName(value){
     // personNmae should not be null or undefined
     if(value == undefined || value ==null){
        console.log("Null or undefined is not allowed for person Name");
     }
     else {
        if (value.length >=25){
            console.log("Person Name length cant be  more than 25 character")
        }else {
            this.#personName=value;
        }
     }
    }
    getPersonName(){
        return `${this.#personName}`;
    }
    setAge(value){
        if(value>0 && value<=100){
            this.#age =value;
        }else{
            console.log("Age should be in between 1 to 100 only");

        }
       
    }
    getAge() { return this.#age;}

}

// let person1= new Person();

// //person1.setPersonName(null);
// //person1.setPersonName("hjghghghggjghgjgjhghghgjgh");
// person1.setPersonName("sam shetty");
// // person1.setAge(120);

// person1.setAge(33);
// console.log(person1.getPersonName());
// console.log(person1.getAge());