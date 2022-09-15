document.body.style.marginTop = "8%"
document.body.style.textAlign = "Center"
document.body.style.display = "flex"
document.body.style.flexDirection = "column"
document.body.style.alignItems = "center"
document.title= "Vowels in a string"
const header = document.createElement("h1")
document.querySelector("body").appendChild(header)
header.innerText = "Vowels in a string"
const textArea = document.createElement("textarea")
document.querySelector("body").appendChild(textArea)
const button = document.createElement("button")
document.querySelector("body").appendChild(button)
const newDiv = document.createElement("div")
document.querySelector("body").appendChild(newDiv)
newDiv.className = "newDiv"
newDiv.style.display = "flex"
const newP = document.createElement("p")
const newRedP = document.createElement("p")
document.querySelector(".newDiv").appendChild(newP)
newP.style.marginRight = "1%"
document.querySelector(".newDiv").appendChild(newRedP)
newP.style.textAlign = "right"
newRedP.style.textAlign = "left"
newP.style.width = "40vw"
newRedP.style.width = "40vw"
newRedP.style.color = "red"
button.style.marginTop = "3%"
button.innerText = "Count vowels"
textArea.placeholder = "Please enter a sentence to find number of vovels in your sentence..."
textArea.style.height = "3rem"
textArea.style.width = "35rem"
textArea.style.resize = "none"
const listVovels = ["a","e","i","o","u"]
let str = ""
let str2 = ""
textArea.addEventListener("input", (e)=>{
  str  = e.target.value
})
button.addEventListener("click", () =>{
    if (str == ""){
        alert("You did not enter a sentence!!!")
    }else{
        let counter = 0;
        newRedP.textContent = ` ${str}`
        str = str.split(" ").join("").toLowerCase()
        console.log(str)
        for (const x of listVovels){
            for (const y of str){
                if (x == y){
                    counter++
                }
            }           
        }
         if (counter == 0){
            newP.innerText = `There is no vowel in `
        }else if (counter ==1){
            newP.innerText = `There is one vowel in `
        }else {
            newP.innerText = `There are ${counter} vowels in `
        }
       
    }
})
