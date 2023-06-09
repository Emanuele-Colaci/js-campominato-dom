let container = document.getElementById('container');
let main = document.getElementById('main');
let button_easy = document.getElementById('play');
let gameEnded = false;
let messaggio = document.getElementById('messaggio');
let punteggio = document.getElementById('punteggio');
let bombe = [];
let caselleCliccate = [];
let score = 0;

function blocco1(){
    let square = document.createElement('div');
    square.classList.add('square', 'square1');
    return square;
}

function blocco2(){
    let square = document.createElement('div');
    square.classList.add('square', 'square2');
    return square;
}

function blocco3(){
    let square = document.createElement('div');
    square.classList.add('square', 'square3');
    return square;
}

function generateBombs(numBombs, range) {
    let bombs = [];
    while (bombs.length < numBombs) {
    let bomb = Math.floor(Math.random() * range) + 1;
        if (!bombs.includes(bomb)) {
            bombs.push(bomb);
        }
    }

    return bombs;
}

function gameOver() {
    gameEnded = true;
    let squares = container.getElementsByClassName('square');
    for (let i = 0; i < squares.length; i++) {
        squares[i].removeEventListener('click', function(){});
    }
}

function revealAllBombs() {
    let squares = container.getElementsByClassName('square');
    for (let i = 0; i < squares.length; i++) {
        let number = parseInt(squares[i].innerText);
        if (bombe.includes(number)) {
        squares[i].style.backgroundColor = 'red';
        }
    }
}
  

button_easy.addEventListener('click', function(){
    let difficolta = document.getElementById('difficolta').value;
    container.innerHTML= '';
    console.log('difficolta:' + difficolta)
    main.classList.remove('d-none');
    messaggio.innerHTML = '';
    gameEnded = false;
    score = 0;
    punteggio.innerHTML = 'Punteggio: ' + score;
    if(difficolta === '1'){
        for(let i = 0; i < 100; i++){
            
            let square = blocco1();
            square.innerText = i + 1;
            
            square.addEventListener('click', function(){
            if (!gameEnded) {
                if (caselleCliccate.includes(this)) {
                    return;
                }
                if(bombe.includes(parseInt(this.innerText))) {
                    this.style.backgroundColor = 'red';
                    messaggio.append('Bomba calpestata!');
                    revealAllBombs();
                    gameOver();
                }else{
                    this.style.backgroundColor = 'rgb(7, 151, 247)';
                    score++;
                    punteggio.innerHTML = 'Punteggio: ' + score;
                    console.log(this.innerText);
                    caselleCliccate.push(this);
                }
            }  
            })
            
            container.append(square);
            
        }
    bombe = generateBombs(16, 100);
    }else if (difficolta === '2'){
        for(let ind = 0; ind < 81; ind++){
            let square = blocco2();
            square.innerText = ind + 1;
            
            square.addEventListener('click', function(){
            if (!gameEnded) {
                if (caselleCliccate.includes(this)) {
                    return;
                }
                if(bombe.includes(parseInt(this.innerText))) {
                    this.style.backgroundColor = 'red';
                    messaggio.append('Bomba calpestata!');
                    revealAllBombs();
                    gameOver();
                }else{
                    this.style.backgroundColor = 'rgb(7, 151, 247)';
                    score++;
                    punteggio.innerHTML = 'Punteggio: ' + score;
                    console.log(this.innerText);
                    caselleCliccate.push(this);
                }
            }  
            })
            container.append(square);
        }
    bombe = generateBombs(16, 81);
    }else if (difficolta === '3'){
        for(let indice = 0; indice < 49; indice++){
            let square = blocco3();
            square.innerText = indice + 1;
            
            square.addEventListener('click', function(){
            if (!gameEnded) {
                if (caselleCliccate.includes(this)) {
                    return;
                }
                if(bombe.includes(parseInt(this.innerText))) {
                    this.style.backgroundColor = 'red';
                    messaggio.append('Bomba calpestata!');
                    revealAllBombs();
                    gameOver();
                }else{
                    this.style.backgroundColor = 'rgb(7, 151, 247)';
                    score++;
                    punteggio.innerHTML = 'Punteggio: ' + score;
                    console.log(this.innerText);
                    caselleCliccate.push(this);
                }
            }  
            })
            container.append(square);
           
        }

    bombe = generateBombs(16, 49);
    }
    console.log('Bombe:', bombe);
})
