const info = document.querySelector('.info');
const wrapperIndex = document.querySelector('.wrapper-index');
const wrapperInfo = document.querySelector('.wrapper-information');
const wrapperChoose = document.querySelector('.wrapper-choose');
const wrapperGame = document.querySelector('.wrapper-game');
// back to home
const backToHome = document.getElementById('back-to-home');
const GameToHome = document.getElementById('game-to-home');

const btnAi = document.getElementById('btn-ai');
const Continue = document.getElementById('continue');

// red
const btnRed = document.getElementById('red');
const dotRed = document.querySelector('.radius #red span');
const faX = document.querySelector('.wrapper-choose .fa-x');
// blue
const btnBlue = document.getElementById('blue');
const dotBlue = document.querySelector('.radius #blue span');
const faO = document.querySelector('.wrapper-choose .fa-o');

// info
info.addEventListener('click', ()=>{
    info.classList.add('move-info');
    wrapperInfo.classList.add('active');
    wrapperIndex.classList.remove('active');
    wrapperChoose.classList.remove('active');
    wrapperGame.classList.remove('active');
})
backToHome.addEventListener('click', ()=>{
    info.classList.remove('move-info');
    wrapperInfo.classList.remove('active');
    wrapperChoose.classList.remove('active');
    wrapperGame.classList.remove('active');
    wrapperIndex.classList.add('active');
})
// choose-ai-or-friend
btnAi.addEventListener('click', ()=>{
    wrapperIndex.classList.remove('active');
    wrapperChoose.classList.add('active');
})
btnRed.addEventListener('click', ()=>{
    btnRed.classList.add('choose');
    dotRed.classList.add('choose');
    faX.classList.add('choose');
    btnBlue.classList.remove('choose');
    dotBlue.classList.remove('choose');
    faO.classList.remove('choose');
})
btnBlue.addEventListener('click', ()=>{
    btnBlue.classList.add('choose');
    dotBlue.classList.add('choose');
    faO.classList.add('choose');
    btnRed.classList.remove('choose');
    dotRed.classList.remove('choose');
    faX.classList.remove('choose');
})
Continue.addEventListener('click', ()=>{
    wrapperChoose.classList.remove('active');
    wrapperGame.classList.add('active');
})
GameToHome.addEventListener('click', ()=>{
    wrapperGame.classList.remove('active');
    wrapperIndex.classList.add('active');
})