let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let submit = document.getElementById("submit");
let head = document.getElementById("rating");
let container = document.querySelector(".container");
let wrapper = document.querySelector(".wrapper");
    submit.addEventListener("click", function(){
        wrapper.classList.remove("hidden");
        container.style.display = "none";
    });
    btn1.addEventListener("click", function(){
        head.innerText = "You selected 1 out of 5";
    });
    btn2.addEventListener("click", function(){
        head.innerText = "You selected 2 out of 5"
    });
    btn3.addEventListener("click", function(){
        head.innerText = "You selected 3 out of 5";
    });
    btn4.addEventListener("click", function(){
        head.innerText = "You selected 4 out of 5";
    });
    btn5.addEventListener("click", function(){
        head.innerText = "You selected 5 out of 5";
    })