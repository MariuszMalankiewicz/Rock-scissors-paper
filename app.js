const chooses = document.querySelectorAll('.choose-hands p');
const play = document.querySelector('.play');

let UseHand = document.getElementById('use-hand');
let computerChoose = document.getElementById('computer-choose');
let Rezult = document.getElementById('Rezult');

let UserHand = '';
let ComputerHand = '';
// CHOOSE
chooses.forEach(choose => choose.addEventListener('click', (e)=>{
    for(let i = 0; i < chooses.length; i++){
        chooses[i].style.color = 'black';
        chooses[i].style.borderBottom = 'none';
    }
    e.target.style.borderBottom = '3px solid aqua';
    e.target.style.color = "aqua";
    UseHand.innerHTML = e.target.textContent;
    UserHand = e.target.textContent;
    computerChoose.innerHTML = 'Computer';
}));
function ComputerChoose(){
    ComputerHand = Math.floor(Math.random()*3);
    if(ComputerHand === 0){
        ComputerHand = 'Paper'
        computerChoose.innerHTML = 'Paper';
    }else if(ComputerHand === 1){
        ComputerHand = 'Rock';
        computerChoose.innerHTML = 'Rock';
    }else if(ComputerHand === 2){
        ComputerHand = 'Scissors';
        computerChoose.innerHTML = 'Scissors';
    }
}
function Logic(){
    if(UserHand === 'Paper' && ComputerHand === 'Rock' || UserHand === 'Rock' && ComputerHand === 'Scissors' || UserHand === 'Scissors' && ComputerHand === 'Paper'){
        Rezult.innerHTML = 'You Win!';
    }else if(UserHand === 'Paper' && ComputerHand === 'Scissors' || UserHand === 'Rock' && ComputerHand === 'Paper' || UserHand === 'Scissors' && ComputerHand === 'Rock'){
        Rezult.innerHTML = 'You Loss!';
    }else{
        Rezult.innerHTML = 'Draw!!';
    }
}
play.addEventListener('click', ()=>{
    if(UserHand != ''){
        ComputerChoose();
        Logic();
        // console.log(`User [${UserHand}]`);
        // console.log(`Computer [${ComputerHand}]`);
        UserHand = '';
        ComputerHand = '';
    }else{
        alert('Choose Hand');
    }
})
