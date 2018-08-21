//Design an algorithm to figure out if someone has won a game of tic-tac-toe


// game as a matrix of strings
var hasWinner = function (board) {
    function checkRow(board, row) {
        for (let i = 1; i < board[row].length; i++) {
            if (board[row][i] != board[row][0]) return false;
        }
        return true;
    }

    function checkCol(board, col) {
        for (let i = 1; i < board.length; i++) {
            if (board[i][col] != board[0][col]) return false;
        }
        return true;
    }

    function checkDiagonal(board, direction) {
        let row = 0;
        let col = direction == 1 ? 0 : board.length - 1;
        let first = board[0][col]

        for (let i = 1; i < board.length; i++) {
            if (board[row][col] != first) return false;
            row++;
            col += direction
        }
        return true
    }

    for (let i = 0; i < board.length; i++) {
        if (checkRow(board, i)) return board[i][0];
    }

    for (let i = 0; i < board[0].length; i++) {
        if (checkCol(board, i)) return board[0][i];
    }

    if (checkDiagonal(board, 1)) return board[0][0];
    if (checkDiagonal(board, -1)) return board[0][board.length-1];

    return null;
}



let game1 = [["O", "X", "O"],
             ["O", "X", "X"],
             ["X", "O", "O"]];


let game2 = [["X", "", "O"],
             ["", "O", "X"],
             ["O", "X", "O"]];

let game3 = [["X", "O", "O", "X"],
             ["O", "O", "X", "O"],
             ["O", "X", "O", "X"],
             ["X", "X", "X", "O"]];


console.log(hasWinner(game1))
console.log(hasWinner(game2))
console.log(hasWinner(game3))