const form=document.querySelector('.grocery-form');

const alert =document.querySelector('.alert');

const grocery =document.querySelector('#grocery');

const submitBtn =document.querySelector('.submit-btn');

const container = document.querySelector('.grocery-container');

const list = document.querySelector('.grocery-list');

const clearBtn = document.querySelector('.clear-btn');

//edit option

let editElement;

let editFlag =false;

let editID="";

// submit form

form.addEventListener("submit",addItem);

// clear items

clearBtn.addEventListener("click",clearItems);


//display items onload

window.addEventListener("DOMContentLoaded" , setUpItems);


// addItem function

function addItem(e)
{
    e.preventDefault();
    const value =grocery.value;
    const id = new Date().getTime().toString();
    // console.log(value ,id);
    if(value != "" && !editFlag)
    {
        const element =document.createElement("article");

        console.log(element);

        let attr =document.createAttribute("data-id");

        attr.value =id;

        element.setAttributeNode(attr); //<article data-id="23234335"></article>

        element.classList.add("grocery-item"); // <article class="grocery-item" 
        //data-id="23234335"></article>
        element.innerHTML=`
        <p class="title">${value}</p>
        <div> 
        <button type="button" class="edit-btn">
        <i class="fa fa-edit"></i> </button>
        
        <button type="button" class="delete-btn">
        <i class="fa fa-trash"></i>
        </button>
        </div>`;

        //add event Listener to both buttons

        const editBtn =element.querySelector(".edit-btn");
        editBtn.addEventListener("click" , editItem);

        const deleteBtn=element.querySelector(".delete-btn");
        deleteBtn.addEventListener("click",deleteItem);

        list.appendChild(element);

        //display alert message

        displayAlert("Item added to list ","success");
    
        container.classList.add("show-container");

        addToLocalStorage(id,value);

        setBackToDefault();
    }

    else if (value !="" && editFlag)
    {
        editElement.innerText=value;
        displayAlert("Item updated Successfully","success");
        // submitBtn.textContent="Submit";
        // grocery.value="";
        // editFlag=false;
        // addItem(e);
        //edit local storage 
        editLocalStorage(editID,value);
        setBackToDefault();
    } else{
        displayAlert("please enter value" ,"danger");
    }
}

// setback to default function

function setBackToDefault(){
    grocery.value ="";
    editFlag =false;
    editID="";
    submitBtn.textContent="submit";
}

function displayAlert(text ,action){
    alert.textContent=text;
    alert.classList.add('alert-${action}');

    setTimeout(function(){
        alert.textContent="";
        alert.classList.remove(`alert-${action}`);
    }, 1000);
}

    function editItem(e){
    //    console.log(e.currentTarget);
    //    console.log(e.currentTarget.parentElement);
    //    console.log(e.currentTarget.parentElement.parentElement);
       const element=e.currentTarget.parentElement.parentElement;
       console.log(element);
       editElement=e.currentTarget.parentElement.previousElementSibling;
       console.log(editElement);
    // console.log(editElement.innerText);
       grocery.value=editElement.innerText;
       
       
       editFlag=true;
    // console.log(element.dataset.id);
       editID =element.dataset.id;
       submitBtn.textContent="Edit";

  
    }

    function deleteItem(e){
        console.log("Delete Clicked");
        const element=e.currentTarget.parentElement.parentElement;
        console.log(element);
        const id= element.dataset.id;
        list.removeChild(element);

        if(list.children.length ===0)
        {
            container.classList.remove("show-container");
        }
        displayAlert("Item removed","danger");
        setBackToDefault();
        removeFromLocalStorage(id);
    }
    function addToLocalStorage(id,value)
    {
        const grocery ={id,value};
        let items =getLocalStorage();
        items.push(grocery);
        localStorage.setItem("list",JSON.stringify(items));
    }

    function getLocalStorage(){
        return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) :[];
    }

    function editLocalStorage(id,value){
        let items =getLocalStorage();
        items=items.map(function(item){
            if(item.id===id){
                 item.value =value;
            }
            return item;
        });
        localStorage.setItem("list",JSON.stringify(items));
    }
function removeFromLocalStorage(id)
{
    let items =getLocalStorage();

    //filter out items that

    items =items.filter((item)=>{
        if(item.id !==id)
        {
         return item;
        }
    });

    localStorage.setItem("list",JSON.stringify(items));

}

// clearItems function

function clearItems()
{
    const items=document.querySelectorAll(".grocery-item");

    //console.log(items);
    if(items.length>0)
    {
        items.forEach((item)=>{
            list.removeChild(item);
        });
        
    }
    container.classList.remove("show-container");
    displayAlert("Item cleared", "danger");
    setBackToDefault();
    localStorage.removeItem("list");
}

// setUp Items function

function setUpItems()
{
    let items =getLocalStorage();
    if(items.length >0)
    {
        items.forEach((item)=>{
           createListItem(item.id , item.value);
        });
        container.classList.add("show-container");
    }
}

function createListItem(id,value)
{
    const element = document.createElement("article");

    let attr = document.createAttribute("data-id");

    attr.value=id;

    element.setAttributeNode(attr);

    element.classList.add("grocery-item");

    element.innerHTML =`
    
    <p class="title">${value}</p>
        <div> 
        <button type="button" class="edit-btn">
        <i class="fa fa-edit"></i> </button>
        
        <button type="button" class="delete-btn">
        <i class="fa fa-trash"></i>
        </button>
        </div>`;

        //add event listener to both buttons

        const editBtn =element.querySelector(".edit-btn");
        editBtn.addEventListener("click" , editItem);

        const deleteBtn=element.querySelector(".delete-btn");
        deleteBtn.addEventListener("click",deleteItem);

        list.appendChild(element);

}