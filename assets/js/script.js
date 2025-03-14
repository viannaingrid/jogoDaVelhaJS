// Elementos do jogo
let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons-container');
let messageContainer = document.querySelector('#message');
let messageText = document.querySelector('#message p');

// Contador de jogadas
let player1 = 0;
let player2 = 0;

// Evento de cliques aos boxes
for(let i = 0; i < boxes.length; i ++) {

    // Quando alguem clica na caixa
    boxes[i].addEventListener('click', function() {

        // Ver quem vai jogar
        let el = checkElem(player1, player2);

        // Verifica se já tem X ou O
        if(this.childNodes.length == 0) {

            let cloneElem = elem.cloneNode(true);

            this.appendChild(cloneElem);

            // Computar jogada
            if(player1 == player2) {

                player1 ++;


            } else {
                player2 ++;
            }

        }

        // Checar quem venceu
        checkWinCondition();
 
    });
}

// function = Ver quem vai jogar
function checkElem(player1, player2) {

    if(player1 == player2) {
        // x
        elem = x;
    } else {
        // o
        elem = o;
    }

    return elem;

}

// function = Checar quem venceu
function checkWinCondition() {

    let b1 = document.getElementById('block-1');
    let b2 = document.getElementById('block-2');
    let b3 = document.getElementById('block-3');
    let b4 = document.getElementById('block-4');
    let b5 = document.getElementById('block-5');
    let b6 = document.getElementById('block-6');
    let b7 = document.getElementById('block-7');
    let b8 = document.getElementById('block-8');
    let b9 = document.getElementById('block-9');

    //Horizontal

    // 123
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
            // x venceu
            declareWinner('x');
        } else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
            // o venceu
            declareWinner('o');
        }

    }

    // 456
    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {

        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
            // x venceu
            declareWinner('x');
        } else if(b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
            // o venceu
            declareWinner('o');
        }

    }

    // 789
    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
            // x venceu
            declareWinner('x');
        } else if(b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
            // o venceu
            declareWinner('o');
        }

    }

    // Vertical

    // 147
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
            // x venceu
            declareWinner('x');
        } else if(b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
            // o venceu
            declareWinner('o');
        }

    }

    // 258
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {

        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if(b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
            // x venceu
            declareWinner('x');
        } else if(b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
            // o venceu
            declareWinner('o');
        }

    }

    // 369
    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
            // x venceu
            declareWinner('x');
        } else if(b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
            // o venceu
            declareWinner('o');
        }

    }

    // Diagonal

    // 159
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
            // x venceu
            declareWinner('o');
        } else if(b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
            // o venceu
            declareWinner('x');
        }

    }

    // 357
    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
            // x venceu
            declareWinner('x');
        } else if(b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
            // o venceu
            declareWinner('o');
        }

    }

    // Deu velha
    let counter = 0;

    for(let i = 0; i < boxes.length; i ++) {

        if(boxes[i].childNodes[0] != undefined) {
            counter ++;
        }
    }

    if(counter == 9) {
        // Deu velha
        declareWinner('DEU VELHA!');
    }
}

// Limpa o jogo, declara o vencedor e atualiza o placar
function declareWinner(winner) {

    let scoreboardX = document.querySelector('#scoreboard-1');
    let scoreboardO = document.querySelector('#scoreboard-2');
    let msg = '';

    if(winner == 'x') {
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        msg = 'O PLAYER 1 VENCEU!';
    } else if(winner == 'o') {
        scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
        msg = 'O PLAYER 2 VENCEU!';
    } else {
        msg = 'DEU VELHA!';
    }

    // Exibir msg
    messageText.innerHTML = msg;
    messageContainer.classList.remove('hide');

    // Esconde msg
    setTimeout(function() {
        messageContainer.classList.add('hide');
    }, 1500);

    // Zerar as jogadas
    player1 = 0;
    player2 = 0;

    // Remover todos os X e O na grade
    let = boxesToRemove = document.querySelectorAll('.box div');

    for(let i = 0; i < boxesToRemove.length; i ++) {
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }

    
}

//atualiza a página
document.getElementById("refresh").addEventListener("click", function(){
    location.reload();
})
