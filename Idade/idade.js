function idade(){
    var ano,calcula;
    ano = document.getElementById('anoNascimento').value;
    calcula= 2022 - ano;
document.getElementById("result").innerHTML=calcula;
}