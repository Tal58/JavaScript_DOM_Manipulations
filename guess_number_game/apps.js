let score = 10;
let topScore = localStorage.getItem("topScore") || 0;
document.querySelector(".top-score").textContent = topScore

//random number from 1 to 100
let randomNumber = Math.floor(Math.random() *100)+1;
console.log(randomNumber)

//check button

document.querySelector(".check-btn").addEventListener("click", () =>{
    const guessInput = Number(document.querySelector(".guess-input").value);
    const msg =  document.querySelector(".msg");
    const body = document.querySelector("body");
    if(!guessInput){
       msg.innerText = "Please enter a number"
    }else if (randomNumber == guessInput){
        msg.innerHTML = `Congrats You win <i class="fa-solid fa-face-grin-hearts fa-2x"></i>`;
        document.querySelector(".check-btn").disabled = true
        body.className = "bg-success"
        if (score>topScore){
            localStorage.setItem("topScore", score);
            document.querySelector(".top-score").textContent = score

        }
        document.querySelector(".secret-number").textContent = randomNumber
    }else{
        if (score >1){
            score--;
            guessInput > randomNumber ? (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-down fa-2x"></i> Decrease`) : (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-up fa-2x"></i> Increase`); 
            
        }else{
            msg.innerHTML = `You Lost <i class="fa-regular fa-face-sad-tear fa-2x"></i> `
            body.className = "bg-danger"
            score--;
            document.querySelector(".check-btn").disabled = true
            document.querySelector(".secret-number").textContent = randomNumber
        }
        document.querySelector(".score").innerText = score
    }    
}) 
//again button 

document.querySelector(".again-btn").addEventListener("click", () =>{
    score = 10;
    document.querySelector(".score").textContent =score;
    randomNumber = Math.floor(Math.random() *100)+1;
    document.querySelector(".secret-number").textContent = "?";
    document.querySelector(".check-btn").disabled = false;
    document.querySelector("body").classList.remove("bg-success", "bg-danger");
    document.querySelector(".guess-input").value = "";
    document.querySelector(".msg").innerText ="Starting..."
})

//event handler
document.querySelector(".guess-input").addEventListener("keydown", (e)  =>{
if (e.code === "Enter"){
    document.querySelector(".check-btn").click();
}
})