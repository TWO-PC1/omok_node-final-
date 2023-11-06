const { v4: uuidv4 } = require('uuid');
const BOARD_SIZE = 15;
const board = Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE).fill(''));
let turn = Math.random() < 0.5 ? 2 : 1;
const users = new Map()
const first = false
let matching=[]
let think = []

let match = false
console.log(board)
const game = {

    set: (xpos, ypos, ws) => {

        if (!users.has(ws)) {
            if (users.size == 0) {

                users.set(ws, '1');
                console.log('111');
                matching.push(ws);
                users.forEach((a,i,o)=>{

                    console.log(a); //get 값 

                    console.log(i); //ws
                    console.log(o); //Map


                })
            } else if(users.size == 1) {
                users.set(ws, '2');
                console.log('222');
                matching.push(ws);

                users.forEach((a,i,o)=>{

                    console.log(a);
                    
                    console.log(i);
                    console.log(o);


                })
            } 
        }
        if (match) {
            if (users.get(ws) == turn) {

                x = xpos
                y = ypos
                console.log(x, y)
                const dol = users.get(users)
                if (board[x][y] == "") {

                    board[x][y] = dol
                    think = [turn, x, y]
                    turn = 3 - turn
                    return true;
                } else {

                    console.log('돌있다 아그야 ')
                    return false;
                }
            } else {
                console.log('님차례 아님')
                console.log(users.get(ws))
                console.log(turn)

            }
        } else {
            console.log('아직')
        }

    },

    load: () => {
        if (match) {
            console.log('match', match)
            return think
        } else {
            return false
        }
    },
    match: () => {
        match = true
    },
    unmatch: () => {
        match = false
    },
    turn: (ws) => {
        if (users.has(ws)) {
            return users.get(ws)
        }


    }


}

module.exports = game;