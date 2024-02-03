const monBox = document.querySelector('.mon');
const tueBox = document.querySelector('.tue');
const wedBox = document.querySelector('.wed');
const thurBox = document.querySelector('.thur');
const friBox = document.querySelector('.fri');
const satBox = document.querySelector('.sat');
const sunBox = document.querySelector('.sun');
const boxArr = document.querySelectorAll('.box');

document.querySelector('#mon').addEventListener('click', event =>{
    for(let i of boxArr){
        if(i.style.top == '0vh'){
            i.style.animationName = 'opaque-up';
        }
    }
    monBox.style.animationName = 'opaque-down';
    monBox.style.top = '0vh';
})

document.querySelector('#tue').addEventListener('click', event =>{
    for(let i of boxArr){
        if(i.style.top == '0vh'){
            i.style.animationName = 'opaque-up';
        }
    }
    tueBox.style.animationName = 'opaque-down';
    tueBox.style.top = '0vh';
})

document.querySelector('#wed').addEventListener('click', event =>{
    for(let i of boxArr){
        if(i.style.top == '0vh'){
            i.style.animationName = 'opaque-up';
        }
    }

    wedBox.style.animationName = 'opaque-down';
    wedBox.style.top = '0vh';
})

document.querySelector('#thur').addEventListener('click', event =>{
    for(let i of boxArr){
        if(i.style.top == '0vh'){
            i.style.animationName = 'opaque-up';
        }
    }
    thurBox.style.animationName = 'opaque-down';
    thurBox.style.top = '0vh';
})

document.querySelector('#fri').addEventListener('click', event =>{
    for(let i of boxArr){
        if(i.style.top == '0vh'){
            i.style.animationName = 'opaque-up';
        }
    }

    friBox.style.animationName = 'opaque-down';
    friBox.style.top = '0vh';
})

document.querySelector('#sat').addEventListener('click', event =>{
    for(let i of boxArr){
        if(i.style.top == '0vh'){
            i.style.animationName = 'opaque-up';
        }
    }
    satBox.style.animationName = 'opaque-down';
    satBox.style.top = '0vh';
})

document.querySelector('#sun').addEventListener('click', event =>{
    for(let i of boxArr){
        if(i.style.top == '0vh'){
            i.style.animationName = 'opaque-up';
        }
    }

    sunBox.style.animationName = 'opaque-down';
    sunBox.style.top = '0vh';
})













































// const box1 = document.querySelector('.box1');
// const box2 = document.querySelector('.box2');

// box1.style.backgroundColor = 'transparent'; 
// box2.style.backgroundColor = 'transparent'; 

// document.querySelector('#mon').addEventListener('click', event => {
//     if(box1.style.backgroundColor != "var(--orange)"){
//         box1.style.backgroundColor = "var(--orange)";
//         box1.style.top = `${0}vh`;
//         box2.style.top = `${-100}vh`;
//     } else{
//         box2.style.backgroundColor = "var(--orange)";
//         box2.style.top = `${0}vh`;
//         box1.style.top = `${-100}vh`;
//     }

// })

// document.querySelector('#tue').addEventListener('click', event => {
//     if(box1.style.backgroundColor != "var(--blue)"){
//         box1.style.backgroundColor = "var(--blue)";
//         box1.style.top = `${0}vh`;
//         box2.style.top = `${-100}vh`;
//     } else{
//         box2.style.backgroundColor = "var(--blue)";
//         box2.style.top = `${0}vh`;
//         box1.style.top = `${-100}vh`;
//         box1.style.backgroundColor = 'transparent';
//     }
// })

// document.querySelector('#wed').addEventListener('click', event => {
//     if(box1.style.backgroundColor == "transparent"){
//         box1.style.backgroundColor = "var(--green)";
//         box1.style.top = `${0}vh`;
//         box2.style.top = `${-100}vh`;
//         box1.style.animationName = 'opaque';
//     } else{
//         box2.style.backgroundColor = "var(--green)";
//         box2.style.top = `${0}vh`;
//         box1.style.top = `${-100}vh`;
//         box1.style.backgroundColor = 'transparent';
//     }
    

// })

// document.querySelector('#thur').addEventListener('click', event => {
//     if(box1.style.backgroundColor == "transparent"){
//         box1.style.backgroundColor = "var(--mocha)";
//         box1.style.top = `${0}vh`;
//         box2.style.top = `${-100}vh`;
//     } else{
//         box2.style.backgroundColor = "var(--mocha)";
//         box2.style.top = `${0}vh`;
//         box1.style.top = `${-100}vh`;
//         box1.style.backgroundColor = 'transparent';
//     }
// })

// document.querySelector('#fri').addEventListener('click', event => {
//     if(box1.style.backgroundColor == "transparent"){
//         box1.style.backgroundColor = "var(--dark)";
//         box1.style.top = `${0}vh`;
//         box2.style.top = `${-100}vh`;
//     } else{
//         box2.style.backgroundColor = "var(--dark)";
//         box2.style.top = `${0}vh`;
//         box1.style.top = `${-100}vh`;
//         box1.style.backgroundColor = 'transparent';
//     }
    

// })

// document.querySelector('#sat').addEventListener('click', event => {
//     if(box1.style.backgroundColor == "transparent"){
//         box1.style.backgroundColor = "var(--red)";
//         box1.style.top = `${0}vh`;
//         box2.style.top = `${-100}vh`;
//     } else{
//         box2.style.backgroundColor = "var(--red)";
//         box2.style.top = `${0}vh`;
//         box1.style.top = `${-100}vh`;
//         box1.style.backgroundColor = 'transparent';
//     }
// })

// document.querySelector('#sun').addEventListener('click', event => {
//     if(box1.style.backgroundColor == "transparent"){
//         box1.style.backgroundColor = "var(--pink)";
//         box1.style.top = `${0}vh`;
//         box2.style.top = `${-100}vh`;
//     } else{
//         box2.style.backgroundColor = "var(--pink)";
//         box2.style.top = `${0}vh`;
//         box1.style.top = `${-100}vh`;
//         box1.style.backgroundColor = 'transparent';
//     }
    

// })

