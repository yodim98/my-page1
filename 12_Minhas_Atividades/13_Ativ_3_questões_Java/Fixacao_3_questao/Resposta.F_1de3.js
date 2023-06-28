let v = document.getElementById('valor');
let r = document.getElementById('resultado');

function btresultado(){
v.onchange = function(){
    let i = 0;
    i = v.value * 3;
    r.innerHTML = 'O valor do cubo de '+ v.value+'³' + ' é: ' + i;
}
};

