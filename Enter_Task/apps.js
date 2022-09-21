//variables
const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");


//event listener for add button

addTask.addEventListener("click",function(){
    let task= document.createElement("div");//create a new div named task
    task.classList.add("task");
    let li = document.createElement("li");//create a new li and its innerText value includes inputTask value
    li.innerText = `${inputTask.value}`;
    task.appendChild(li); //li is a child of task

    let checkButton = document.createElement("button");//create a new button named checkButton
    checkButton.innerHTML = `<i class="fa-solid fa-check"></i>`// to create icon
    checkButton.classList.add("checkTask");
    task.appendChild(checkButton);// checkButton is a child of checkButton

    let deleteButton = document.createElement("button");//in this part we will do the same issue in delete button like check button
    deleteButton.innerHTML = `<i class='fa-solid fa-trash-can'></i>`
    deleteButton.classList.add("deleteTask");
    task.appendChild(deleteButton);

    if(inputTask.value === ""){
        alert("Please enter a task") //to check input task whether it has value or not
    }else {
        taskContainer.appendChild(task);
    }
    inputTask.value = "";

    checkButton.addEventListener("click",function(){ //change text decoration when user click checkbutton
        checkButton.parentElement.style.textDecoration = "line-through";
    })

    deleteButton.addEventListener("click", function(){//remove the part where user click includes task
       task.remove()        
    })

});