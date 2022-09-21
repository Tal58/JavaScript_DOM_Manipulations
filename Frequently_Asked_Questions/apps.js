const accordion =document.getElementsByClassName("content-container");

//to change the classList to active when user click one part of the accordion
for (i=0; i< accordion.length; i++){
    accordion[i].addEventListener("click",function(){
        this.classList.toggle("active");
    })
}