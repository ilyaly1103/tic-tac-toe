document.addEventListener("DOMContentLoaded", function () {

    const cells = document.querySelectorAll('.cell');
    const text = document.querySelector('span');
    const turn = document.querySelector('p');
    const btn = document.querySelector('button');
    const fourth = document.querySelector('.fourth');
    const sixth = document.querySelector('.sixth');
    let result = [];


    function addEvent(event) {

        const cell = event.target;

        if (event.button === 0 && cell.innerHTML === "" && (result.length % 2 === 0)) {
            cell.innerHTML = "X";
            result.push("X");
            turn.innerHTML = "Turn: O";
            checkWin();
            reset();  
        } 
        else if (event.button === 0 && cell.innerHTML === "" && (result.length % 2 !== 0)) {
            cell.innerHTML = "O";
            result.push("O");
            turn.innerHTML = "Turn: X";
            checkWin();
            reset();
        }
    }


    cells.forEach(cell => {
        cell.addEventListener("mousedown", addEvent);
    });

    const reset = function () {
        btn.addEventListener("click", function () {
            cells.forEach((cell) => {
                cell.innerHTML = "";
                cell.removeEventListener("mousedown", addEvent);
                cell.addEventListener("mousedown", addEvent);
                cell.classList.remove("active-horizontal");
                cell.classList.remove("active-vertical");
                cell.classList.remove("active-diag");
                cell.classList.remove("active-diag-reverse");
            });

            text.innerHTML = "";
            if(result[result.length - 1] === "X"){
                turn.innerHTML = "Turn: X";
                result.splice(0, result.length);
            }
            else if(result[result.length - 1] === "O"){
                turn.innerHTML = "Turn: O";
                result.splice(0, result.length - 1);
            }
        });
    }

    function checkWin() {

        for (let i = 0; i < cells.length; i += 3) {

            if (cells[i].innerHTML === "X" &&
                cells[i + 1].innerHTML === "X" &&
                cells[i + 2].innerHTML === "X") {
                text.innerText = "Player 1 wins!";
                turn.innerHTML = "";
                cells[i].classList.add("active-horizontal");
                removeEventListeners();
                return;
            }
            if (cells[i].innerHTML === "O" &&
                cells[i + 1].innerHTML === "O" &&
                cells[i + 2].innerHTML === "O") {
                text.innerText = "Player 2 wins!";
                turn.innerHTML = "";
                cells[i].classList.add("active-horizontal");
                removeEventListeners();
                return;
            }
        }

        for (let i = 0; i < 3; i++) {
            if (cells[i].innerHTML === "X" &&
                cells[i + 3].innerHTML === "X" &&
                cells[i + 6].innerHTML === "X") {
                text.innerText = "Player 1 wins!";
                turn.innerHTML = "";
                cells[i + 3].classList.add("active-vertical");
                if (fourth.classList.contains("active-vertical")) {
                    fourth.classList.add("move4");
                }
                else if (sixth.classList.contains("active-vertical")) {
                    sixth.classList.add("move6");
                }
                removeEventListeners();
                return;
            }
            if (cells[i].innerHTML === "O" &&
                cells[i + 3].innerHTML === "O" &&
                cells[i + 6].innerHTML === "O") {
                text.innerText = "Player 2 wins!";
                turn.innerHTML = "";
                cells[i + 3].classList.add("active-vertical");
                if (fourth.classList.contains("active-vertical")) {
                    fourth.classList.add("move4");
                }
                else if (sixth.classList.contains("active-vertical")) {
                    sixth.classList.add("move6");
                }
                removeEventListeners();
                return;
            }
        }

        if (cells[0].innerHTML === "X" &&
            cells[4].innerHTML === "X" &&
            cells[8].innerHTML === "X") {
            text.innerText = "Player 1 wins!";
            turn.innerHTML = "";
            cells[4].classList.add("active-diag");
            removeEventListeners();
            return;
        }
        if (cells[0].innerHTML === "O" &&
            cells[4].innerHTML === "O" &&
            cells[8].innerHTML === "O") {
            text.innerText = "Player 2 wins!";
            turn.innerHTML = "";
            cells[4].classList.add("active-diag");
            removeEventListeners();
            return;
        }
        if (cells[2].innerHTML === "X" &&
            cells[4].innerHTML === "X" &&
            cells[6].innerHTML === "X") {
            text.innerText = "Player 1 wins!";
            turn.innerHTML = "";
            cells[4].classList.add("active-diag-reverse");
            removeEventListeners();
            return;
        }
        if (cells[2].innerHTML === "O" &&
            cells[4].innerHTML === "O" &&
            cells[6].innerHTML === "O") {
            text.innerText = "Player 2 wins!";
            turn.innerHTML = "";
            cells[4].classList.add("active-diag-reverse");
            removeEventListeners();
            return;
        }
        if (result.length === 9) {
            text.innerText = "Draw!";
            turn.innerHTML = "";
            removeEventListeners();
            return;
        }

    }

    function removeEventListeners() {
        cells.forEach(cell => {
            cell.removeEventListener("mousedown", addEvent);
        });
    }

});
