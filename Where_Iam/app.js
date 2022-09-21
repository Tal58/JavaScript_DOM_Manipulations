//variables

let openBtn = document.getElementById("open-btn");
let modalContainer = document.getElementById("modal-container")
let closeBtn = document.getElementById("close-btn")


//to change container display to block
openBtn.addEventListener("click", function(){
    modalContainer.style.display = "block";

})

//to change container display to none
closeBtn.addEventListener("click", function(){
    modalContainer.style.display = "none"
})

// to change container display to none
window.addEventListener("click", function(e){
    if (e.target ===modalContainer){
        modalContainer.style.display = "none";
    }
})

