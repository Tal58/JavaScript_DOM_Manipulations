//HTML design
document.title = "Dom examples"
document.body.style.background = "url('./1.jpg') no-repeat center center/cover"
document.body.style.height = "99vh"
document.body.style.width = "100vw"
document.body.style.color = "white"
document.body.className = "row"
const main = document.createElement("main")
document.querySelector("body").appendChild(main)
main.className = "main mt-5 text-center flex-column-reverse justify-content-center"
main.style.fontSize = "1rem"
const h3TOP = document.createElement("h3")
document.querySelector(".main").appendChild(h3TOP)
h3TOP.innerText = "Programming Language"

const firstDiv = document.createElement("div")
document.querySelector(".main").appendChild(firstDiv)
firstDiv.className = "first col"


const section = document.createElement("section")
document.querySelector(".first").appendChild(section)
section.className = "section d-flex gap-2 justify-content-center"
const input = document.createElement("input")
input.type = "text"
input.placeholder = "Please Enter a language..."
input.id = "lang-input"
input.className = "input"
input.style.width = "20rem"
document.querySelector("section").appendChild(input)

const add = document.createElement("input")
add.value = "ADD"
add.type = "button"
add.id = "add-btn"
document.querySelector("section").appendChild(add)
const del = document.createElement("input")
del.value = "DELETE"
del.type = "button"
del.id = "delete-btn"
document.querySelector("section").appendChild(del)

add.style.backgroundColor = "rgb(125, 231, 125)"
del.style.backgroundColor = "rgb(247, 83, 83)"


const newDiv = document.createElement("div")
document.querySelector(".main").appendChild(newDiv)
newDiv.className = "newDiv col d-flex justify-content-center "
const main_ul = document.createElement("ul")
newDiv.appendChild(main_ul);



//variables
const addBtn = document.getElementById("add-btn")
const delBtn = document.getElementById("delete-btn")
const langInput = document.getElementById("lang-input")
const h3 = document.querySelector(".main h3")


//mouser over and mouse out
h3.onmouseover = () => {
    h3.style.color = "red"
}

h3.onmouseout = () => {
    h3.style.color = "white"
}


addBtn.onmouseover = () => {
    addBtn.style.background = "white";
    addBtn.style.fontSize = "1.2rem"
}
addBtn.onmouseout = () => {
    addBtn.style.background = "rgb(125, 231, 125)"
    addBtn.style.fontSize = "1rem"
}

delBtn.onmouseover = () => {
    delBtn.style.background = "purple"
    delBtn.style.fontSize = "1.2rem"
}
delBtn.onmouseout = () => {
    delBtn.style.background = "rgb(247, 83, 83)"
    delBtn.style.fontSize = "1rem"
}

//clik to add and delete button
addBtn.addEventListener("click", () => {   
    if (langInput.value == "") {
        alert("You did not enter any value!!!")
    } else {
        const main_li = document.createElement("li")
        main_li.style.listStyle = "none"
        main_li.style.fontSize =    "1.3rem"
        main_li.style.fontWeight = "600"
        main_ul.appendChild(main_li)
        main_li.innerText = `${main_ul.childElementCount}. ${langInput.value.toUpperCase()}`
        if (langInput.value.toLowerCase() === "javascript") {
            main_ul.lastChild.style.color = "red"
        }
        langInput.value = ""
        document.getElementById("lang-input").focus()
        document.body.style.background = `url('./images/${Math.floor(Math.random() * 24)}.jpg') no-repeat center center/cover`
        document.body.style.height = "99vh"
        document.body.style.width = "100vw"
    }

})

delBtn.addEventListener("click", () => {
    if (main_ul.childElementCount > 0) {
        main_ul.lastChild.remove()
        document.body.style.background = `url('./images/${Math.floor(Math.random() * 24)}.jpg') no-repeat center center/cover`
        document.body.style.height = "99vh"
        document.body.style.width = "100vw"
    } else {
        alert("You have no value entered !!!")
    }

})
//focus on input
document.getElementById("lang-input").focus()

//enter key event handler

langInput.addEventListener("keydown", (event) => {
    if (event.code == "Enter") {
        addBtn.click();
    }
})

langInput.addEventListener("keydown", (event) => {
    if (event.code == "Delete") {
        delBtn.click();
    }
})