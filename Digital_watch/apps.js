//display time
let clock = document.querySelector(".clock") 
function digitalWatch(){
    const d = new Date();
    let time = `${d}`
    clock.innerText = time.slice(0,25) ;
}
setInterval(digitalWatch,1000)


