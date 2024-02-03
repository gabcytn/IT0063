const screen = document.querySelector('#display');
let myList = []
const chars = ['+', '-', '*', '/', '.', '%'];
let toEval = ""
function updateScreen(){
    toEval = "";
    for (let i = 0; i < myList.length; i++){
        if (chars.includes(myList[i]) && chars.includes(myList[i+1])){
            continue;
        }
        toEval += myList[i];
    }

    if (toEval.length == 0){
        screen.innerHTML = '0';
    } else{
        screen.innerHTML = `${toEval}`;
    }
}
document.querySelector('#decimal').onclick = function(){
    myList.push('.');
    updateScreen();
}

document.querySelector('#equals').onclick = function(){
    let answer = eval(toEval);
    screen.innerHTML = answer;
    myList = [answer];
}

document.querySelector('#mod').onclick = function(){
    myList.push('%');
    updateScreen();
}
document.querySelector('#plus').onclick = function(){
    myList.push('+');
    updateScreen();
}
document.querySelector('#minus').onclick = function(){
    myList.push('-');
    updateScreen();
}
document.querySelector('#divide').onclick = function(){
    myList.push('/');
    updateScreen();
}
document.querySelector('#multiply').onclick = function(){
    myList.push('*');
    updateScreen();
}

document.querySelector('#del').onclick = function(){
    myList.pop()
    updateScreen();
}

document.querySelector('#clear').onclick = function(){
    myList = [];
    updateScreen();
}

document.querySelector('#one').onclick = function(){
    myList.push('1');
    updateScreen();
}
document.querySelector('#two').onclick = function(){
    myList.push('2');
    updateScreen();
}
document.querySelector('#three').onclick = function(){
    myList.push('3');
    updateScreen();
}
document.querySelector('#four').onclick = function(){
    myList.push('4');
    updateScreen();
}
document.querySelector('#five').onclick = function(){
    myList.push('5');
    updateScreen();
}
document.querySelector('#six').onclick = function(){
    myList.push('6');
    updateScreen();
}
document.querySelector('#seven').onclick = function(){
    myList.push('7');
    updateScreen();
}
document.querySelector('#eight').onclick = function(){
    myList.push('8');
    updateScreen();
}
document.querySelector('#nine').onclick = function(){
    myList.push('9');
    updateScreen();
}
document.querySelector('#zero').onclick = function(){
    myList.push('0');
    updateScreen();
}
