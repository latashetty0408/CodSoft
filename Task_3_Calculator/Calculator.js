let Input_Display = document.querySelector('input');
let Action_buttons = document.querySelectorAll('.btn');
let clear = document.getElementById('clear');
let output = '';

Array.from(Action_buttons).forEach((buttons)=>{
    buttons.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            output = eval(output);
            Input_Display.value = output;
        }
        else if(e.target.innerHTML == '←'){
            output = output.toString().slice(0, -1);
            Input_Display.value = output;
        }
        else{
            // console.log(e.target);
            output += e.target.innerHTML;
            console.log(output)
            Input_Display.value = output;
        }
    })
})

clear.addEventListener("click", function() {
    output = "";
    Input_Display.value = output
})