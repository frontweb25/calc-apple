const calc = document.querySelector('.calc');
let result = document.querySelector('.calc__result');



calc.addEventListener('click', function(event) {
    if(!event.target.classList.contains('btn')) return;

    const value = event.target.innerText;
    
    if(value === 'ac') {
        result.innerHTML = '';
    } else if(value === '='){
    if(result.innerHTML.search(/[^0-9*/+-.]/mi) != -1) return
        result.innerHTML = eval(result.innerHTML)
    } else {
        result.innerHTML += value;
    }
});