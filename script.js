
// Pegar a div onde os dados serão inseridos
let dias = document.querySelector('.days')

// Pegar o botão
const addBtn = document.getElementById('addBtn')

// Objeto DIA
// class Dia{
//     dia = Date.getDate();
//     mes = (Date.getMonth() +1);
//     ano = '2022';
// }

let date = new Date()

let dia = date.getDate();
let mes = date.getMonth() + 1;

if(dia < 10){
    dia = `0${dia}`
} else{
    dia = dia
}


// FUnção para inserir o html
function inserirHtml(dia, mes){
    return `
    <div class="day">
        <div>0${dia}/0${mes}</div>
        <input type="checkbox" name="run">
        <input type="checkbox" name="water">
        <input type="checkbox" name="gim">
        <input type="checkbox" name="sleep">
        <input type="checkbox" name="dog">
        <input type="checkbox" name="food">
    </div>
    `
}

// Função pro botão

// function adicionar(){    

// }

// Adicionando evento ao botão
addBtn.addEventListener('click', function(ev){
    dias.innerHTML += inserirHtml(dia, mes)
})

