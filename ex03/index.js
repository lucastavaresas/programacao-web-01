window.onload = function() {
    let input = prompt("Digite seu nome");
    while(input == ''){
        input = prompt("Digite seu nome");
        if(input != ''){
            break;
        }
    }
    return alert(`olá ${input}`);
};