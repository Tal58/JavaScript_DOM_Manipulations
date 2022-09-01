let shoePlus = document.querySelector("#shoeplus")
let shoeMinus = document.querySelector("#shoeminus")
let backbagPlus = document.querySelector("#bagplus")
let backbagMinus = document.querySelector("#bagminus")

shoePlus.addEventListener("click", function(){
    document.getElementById("shoe").innerText = parseInt(document.getElementById("shoe").innerText)+1;
    document.getElementById("totalprice").innerText = `$${(parseInt(document.getElementById("shoe").innerText)*(74.99)+ parseInt(document.getElementById("bag").innerText)*(54.99)).toFixed(2) }`;
    price()
})

shoeMinus.addEventListener("click", function(){
    if (parseInt(document.getElementById("shoe").innerText)>0) {
        document.getElementById("shoe").innerText = parseInt(document.getElementById("shoe").innerText)-1  ;
        document.getElementById("totalprice").innerText = `$${(parseInt(document.getElementById("shoe").innerText)*(74.99)+ parseInt(document.getElementById("bag").innerText)*(54.99)).toFixed(2)}`;
        price()
    }      
})

backbagPlus.addEventListener("click", function(){
    document.getElementById("bag").innerText = parseInt(document.getElementById("bag").innerText)+1;
    document.getElementById("totalprice").innerText = `$${(parseInt(document.getElementById("shoe").innerText)*(74.99)+ parseInt(document.getElementById("bag").innerText)*(54.99)).toFixed(2) }`;
    price()
})

backbagMinus.addEventListener("click", function(){
    if (parseInt(document.getElementById("bag").innerText)>0) {
        document.getElementById("bag").innerText = parseInt(document.getElementById("bag").innerText)-1;
        document.getElementById("totalprice").innerText = `$${(parseInt(document.getElementById("shoe").innerText)*(74.99)+ parseInt(document.getElementById("bag").innerText)*(54.99)).toFixed(2) }`;
        price()
    }      
})
function price(){
    document.getElementById("hiddenprice").value = document.getElementById("totalprice").innerText
}
price()