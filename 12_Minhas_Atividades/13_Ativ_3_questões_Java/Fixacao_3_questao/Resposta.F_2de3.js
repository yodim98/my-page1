let n1 = document.getElementById('caixa1');
let n2 = document.getElementById('caixa2');
let n3 = document.getElementById('caixa3');
let maior = document.getElementById('result')

function BtFuncao(){
    let i = 0;
    i = Math.max(n1.value, n2.value, n3.value);
    maior.innerHTML = 'Maior valor dentre os 3 é: ' + i;
}