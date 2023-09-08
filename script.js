const display = document.getElementById('display');

let inputValue = " ";

function toDisplay(val){
    if(inputValue.length<=6){
        inputValue+=val;
        display.value=inputValue;
    }
}

function toOperate(op){
    if(inputValue.length>1){
        inputValue+=op
        display.value=inputValue
    }
}

function toReset(){
 inputValue= " ";
 display.value= "0";
}

function equalTo(){
    inputValue= eval(inputValue)
    display.value=inputValue
    inputValue= inputValue.toString();
}

function toDelete(){
    if(inputValue.length>2){
        inputValue=inputValue.slice(0,-1);
        display.value= inputValue;
    }
    else
    {
        inputValue=" ";
        display.value= "0";
}
//  inputValue=inputValue.slice(0,-1);
//           display.value= inputValue;
}
    

document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (key >= '0' && key <= '9') {
        toDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        toOperate(key);
    } else if (key === 'Enter') {
        equalTo();
    } else if (key === 'Delete' || key === 'Backspace') {
        toDelete();
    }
    else if(key === 'Escape'){
        toReset();
    }
});




