let button = document.querySelector(".button")
let backgroundP = document.querySelector(".secret-number")
let score = 10;
let topScore = localStorage.getItem("topScore") || 0;
document.querySelector(".top-score").textContent = topScore


//random number from 1 to 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber)

//check button
document.querySelector(".check-btn").addEventListener("click", () => {
    backgroundP.innerHTML = ""
    const guessInput = Number(document.querySelector(".guess-input").value);
    const body = document.querySelector("body");
   if (randomNumber == guessInput) {
        backgroundP.innerHTML = `Congrats You win <i class="fa-solid fa-face-grin-hearts fa-2x"></i>`;
        document.querySelector(".check-btn").disabled = true
        document.querySelector(".guess-input").disabled = true
        document.querySelector(".check-btn").style.display = "none"
        wincolor()
        
        // body.className = "bg-success"
        
        if (score > topScore) {
            localStorage.setItem("topScore", score);
            document.querySelector(".top-score").textContent = score

        }
    }
    else {
        if (score > 1) {
            if (guessInput<=0 || guessInput>100){
                backgroundP.innerHTML = "You made a mistake enter a number from 1 to 100"
                score--;
            } 
            else{
                score--;
                guessInput > randomNumber ? (backgroundP.innerHTML = `Decrease <i class="fa-solid fa-arrow-trend-down fa-2x"> </i>`) : (backgroundP.innerHTML = `Increase <i class="fa-solid fa-arrow-trend-up fa-2x"></i>`);
            }         

        } else {
            backgroundP.innerHTML = `You Lost <i class="fa-regular fa-face-sad-tear fa-2x"></i> `
            // body.className = "bg-danger"
            score--;
            document.querySelector(".check-btn").disabled = true
            document.querySelector(".guess-input").disabled = true
            document.querySelector(".check-btn").style.display = "none"
            losecolor()
            backgroundP.textContent = `Failed! Secret number was ${randomNumber}`           
        }
        document.querySelector(".score").innerText = score
    }
})
//again button 
document.querySelector(".again-btn").addEventListener("click", () => {
    document.querySelector(".again-btn").style.display = "none"
    document.querySelector(".check-btn").style.display = "block"
    score = 10;
    document.querySelector(".score").textContent = score;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber)
    backgroundP.textContent = "You wanna play again :)";
    document.querySelector(".check-btn").disabled = false;
    document.querySelector(".guess-input").disabled = false;
    document.querySelector("body").classList.remove("bg-success", "bg-danger");
    document.querySelector(".guess-input").value = "";
    document.body.style.backgroundColor = "#2d3436"
})

//event handler
document.querySelector(".guess-input").addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        document.querySelector(".check-btn").click();
    }
})


//opening message
async function welcome() {
    backgroundP.innerHTML = "System is loading";
    const newArr = ["System is loading.","System is loading..","System is loading...","System loaded", 'Lets Play <i class="fa-solid fa-face-grin-hearts"></i>',"Please enter a number"]
    for (const x of newArr) {
            let myPromise = new Promise(function (resolve) {
                setTimeout(function () { resolve(`${x}`); }, 900);
            });
            backgroundP.innerHTML = await myPromise;
        }
        document.querySelector(".check-btn").disabled = false
        document.querySelector(".guess-input").disabled = false
        document.querySelector(".check-btn").style.color = "red"
    }


//closing message
async function close() {
    backgroundP.innerHTML = 'Mihail Tal was here <i class="fa-regular fa-chess-knight fa-2x"></i>'
    let myPromise = new Promise(function(resolve) {
        setTimeout(function () { resolve("black"); }, 1500);
    });
    backgroundP.style.backgroundColor = await myPromise
    backgroundP.innerText = "" 
    document.querySelector(".button").style.color = "white" 
    document.querySelector(".check-btn").style.color = "white" 
    document.querySelector(".check-btn").disabled = true     
    document.querySelector(".guess-input").disabled = true     
}

//changing backgrouncolor
async function wincolor(){
    const color = ["aqua","aquamarine","burlywood","coral","chocolate","chartreuse","green"]
    for (const x of color){
        console.log(x)
        let myPromise = new Promise(function(resolve) {
            setTimeout(function () { resolve(`${x}`); }, 1000);
            
        });document.body.style.backgroundColor = await myPromise
    }document.querySelector(".again-btn").style.display = "block"
}

async function losecolor(){
    const color = ["brown","burlywood","cadetblue","coral","chocolate","red"]
    for (const x of color){
        console.log(x)
        let myPromise = new Promise(function(resolve) {
            setTimeout(function () { resolve(`${x}`); }, 1000);
            
        });document.body.style.backgroundColor = await myPromise
    }document.querySelector(".again-btn").style.display = "block"
}
//On off button
button.addEventListener("click", () => {
    if (backgroundP.style.backgroundColor == "cornsilk") {
        close()        
    } else {
        backgroundP.style.backgroundColor = "cornsilk"
        welcome()     
    }
})
