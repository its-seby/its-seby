let dobozok = document.querySelectorAll('.doboz');
let pontszam = 0;

function szinezes_random(dobozok){
    return dobozok[Math.floor(Math.random()*9)];
}
function kivalaszt(e){
    if(e.target.classList.contains('szines')){
        e.target.classList.toggle('szines');
        let ujdoboz = szinezes_random(dobozok);
        ujdoboz.classList.toggle('szines');
        ujdoboz.addEventListener('click', kivalaszt);
    }
}

function main(){
    
    let szines_doboz = szinezes_random(dobozok);
    szines_doboz.addEventListener('click', kivalaszt);
    szines_doboz.classList.toggle('szines');

}

main();