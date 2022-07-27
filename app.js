const btns = document.querySelectorAll('.btn');


// CHOOSE
btns.forEach(btn => btn.addEventListener('click', (e)=>{
    for(let i = 0; i < btns.length; i++){
        btns[i].style.color = 'black';
    }
    console.log(e.target.classList);
    e.target.style.color = "aqua";
    const change = document.querySelector('.change');
    let newHand = document.createElement('i');
    newHand.classList.add(e.target.value);
    // newHand.textContent = (e.target.textContent);
    change.appendChild(newHand);
}));

// Btn-start
const play = document.getElementById("play");


// function MainFunction(){
// }

// play.addEventListener('click', MainFunction);


