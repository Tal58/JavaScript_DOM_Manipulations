const body = document.querySelector("body");
const car = document.querySelector(".car");
const ground = document.querySelector(".ground")
const carImg =document.querySelector(".car img");
let flag =true;
//to activate the right and pop-up animation
body.addEventListener("keydown", (e)=>{
    if (e.code === "Enter"){
        if (!ground.classList.contains("right")){
            ground.classList.add("right")
            car.classList.add("pop-up")
        }
        else{
            ground.classList.remove("right")
            car.classList.remove("pop-up")
        }
    }
})


//to change the car image when keydown the escape button
body.addEventListener("keydown", (e)=>{
    if(e.code ==="Escape"){
        if(flag){
            carImg.setAttribute("src", "./img/Img_06.png")
            flag = false
        }else{
            carImg.setAttribute("src", "./img/Img_05.png")
            flag = true
        }
    }
})