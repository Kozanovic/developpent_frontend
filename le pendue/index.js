const motEl = document.getElementById('mot');
const wrongLetters = document.getElementById('wrong-letters');
const playBtn = document.getElementById('play-btn');
const message = document.getElementById('message-content');
const notification = document.getElementById('notif-content');

const messageFinal = document.getElementById('final-message');

const supportContent = document.querySelectorAll('.circle-content');

const mots = ['javascript','script','python','application',
'ordinateur','sourie','ecran','php','database','polymorphisme'];

let motSelectionnee = mots[Math.floor(Math.random() * mots.length)];

// console.log(motSelectionnee);

const correctLettersArr = [];
const wrongLettersArr = [];

function showLetter(){
    motEl.innerHTML = `
        ${motSelectionnee.split('').map(
            letter => `
            <span class="letter">
                ${correctLettersArr.includes(letter) ? letter : ''}
            </span>
            `
        ).join('')
    }
    `;

    const motInterne = motEl.innerText.replace(/\n/g , '');

    // console.log(motEl.innerText , motInterne);

    if(motInterne === motSelectionnee){
        messageFinal.innerText = 'Bravo, tu as gagne !';
        message.style.display = 'flex';
    }
}

function update(){
    wrongLetters.innerHTML = `
        ${wrongLettersArr.map(letter => `<span>${letter}</span>
            `)}
    `;

    supportContent.forEach((part , index) => {
        const errors = wrongLettersArr.length;
        if(index < errors){
            part.style.display = 'block';
        }else{
            part.style.display = 'none';
        }
    })


    if(wrongLettersArr.length === supportContent.length){
        messageFinal.innerText = 'Maleureusement , Vous avez perdu :( ';
        message.style.display = 'flex';
    }
}

function showNotification(){
    notification.classList.add('show');
    setTimeout(() =>{
        notification.classList.remove('show');
    },2000);
}


window.addEventListener('keydown' , e => {

    // console.log(e.keyCode);

    if(e.keyCode >= 65 && e.keyCode <= 90){

        const letter = e.key.toLowerCase();
        
        if(motSelectionnee.includes(letter)){

            if(!correctLettersArr.includes(letter)){
                correctLettersArr.push(letter);
    
                showLetter();
    
            }else{
                showNotification();
            }
        }else{
            if(!wrongLettersArr.includes(letter)){
                wrongLettersArr.push(letter);
            
                update();
            }else{
                showNotification();
            }
        }
    }
});



playBtn.addEventListener('click' , playAgain);
function playAgain(){
    correctLettersArr.splice(0);
    wrongLettersArr.splice(0);

    motSelectionnee = mots[Math.floor(Math.random() * mots.length)];

    showLetter();

    update();

    message.style.display = 'none';

}

showLetter();