//ゲーム自体の関数
const game = () => {
    let pScore = 0;
    let cScore = 0;

    //ゲーム開始
    const startGame = () => {
        //Let's Playボタンが押されたとき
        const playBtn = document.querySelector('.intro button');
        playBtn.onclick = () => {
            const intro = document.querySelector('.intro');
            const match = document.querySelector('.match');

            intro.classList.add('fadeOut');
            match.classList.add('fadeIn');

        };
    }

    //じゃんけんスタート
    const playMatch = () => {
        const optionList = ['rock', 'paper', 'scissors'];
        const options = document.querySelectorAll('.options button');
        options.forEach((option) => {
            option.onclick = function () {
                //コンピュータの手
                const computerChoise = Math.floor(Math.random() * optionList.length);

                //Image Set
                const playerImg = document.querySelector('.hands .player');
                playerImg.src = `./assets/${optionList[this.dataset.option]}.png`

                const computerImg = document.querySelector('.hands .computer');
                computerImg.src = `./assets/${optionList[computerChoise]}.png`


                const playerIsWin = compare(Number(this.dataset.option), computerChoise);

                const matchResult = document.querySelector('.winner h1');

                if (playerIsWin === 'WIN') {
                    pScore++;
                    matchResult.textContent = 'Player Win';
                } else if (playerIsWin == 'LOSE') {
                    cScore++;
                    matchResult.textContent = 'Computer Win';
                } else {
                    matchResult.textContent = 'It is a tie';
                }

                setScore();

            }
        });
    }

    //値をセット
    const setScore = () => {
        const player = document.querySelector('.player p');
        const computer = document.querySelector('.computer p');

        player.textContent = pScore;
        computer.textContent = cScore;
    }

    //勝ち負け
    const compare = (playerChoise, computerChoise) => {
        const result = ((playerChoise - computerChoise) + 3) % 3;

        if (result === 0) {
            return "DRAW";
        }
        if (result === 1) {
            return "WIN";
        }
        if (result === 2) {
            return "LOSE";
        }
        return "UNKNOWN";
    }

    startGame();
    playMatch();
}

//ゲームをスタートさせる
game();