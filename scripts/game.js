const x = document.querySelector('.fa-solid .fa-x');
const o = document.querySelector('.fa-solid .fa-o');


const game = document.querySelector('.game');

function CreateSquares(){
    for(let i = 0; i < 9; i++){
        squares = document.createElement('div');
        squares.setAttribute('id', i);
        squares.addEventListener('click', PutSymbol());
        game.appendChild(squares);
    }
}


function PutSymbol(){
    const id = squares.getAttribute('id');
    console.log(id);

}


CreateSquares(); 