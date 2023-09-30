

let bulb = document.querySelector(".bulb");
let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    bulb.style.backgroundColor = "yellow";
})

let offbtn = document.querySelector(".OFF");

offbtn.addEventListener("click", function(){
    bulb.style.backgroundColor = "white";
})
