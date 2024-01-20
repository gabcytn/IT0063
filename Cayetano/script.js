const body = document.querySelector("body");
const btn = document.querySelector("button");
const p = document.querySelectorAll("p");
const h2 = document.querySelectorAll("h2");
const h1 = document.querySelectorAll("h1");
const li = document.querySelectorAll("li");
const header = document.querySelector(".header");
const container = document.querySelector(".container");
const my_list = [p, h1, h2, li];

btn.addEventListener('click', function(){
    btn.innerHTML = btn.innerHTML == "Light mode" ? "Dark mode" : "Light mode"; 
    for(let item of my_list){
        for(let i = 0; i < item.length; i++){
            item[i].classList.toggle("dark_text");
        }
    }
    header.style.borderBottomColor = header.style.borderBottomColor == "var(--white)" ? "var(--grey)" : "var(--white)";
    body.classList.toggle("dark");
    container.classList.toggle("border");
})


