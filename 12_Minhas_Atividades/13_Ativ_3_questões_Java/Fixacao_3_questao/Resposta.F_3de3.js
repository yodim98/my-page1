let texto = document.getElementById('info');
let p = document.getElementById('result');

function txtFuncao(){
    texto.value = texto.value.toUpperCase();
    p.value = texto.value.length
    p.innerHTML = 'Numeros de caracteres é: ' + p.value;
}