function solution(keyinput, board) {
    let count = [0,0];
    let limit = [Math.floor(board[0]/2),Math.floor(board[1]/2)]
    
    for(let i = 0; i < keyinput.length; i++) {
        if(keyinput[i] === "left" && count[0] > -limit[0]) {
            count[0] -= 1;
        } else if(keyinput[i] === "right" && count[0] < limit[0]){
            count[0] += 1;
        } else if(keyinput[i] === "down" && count[1] > -limit[1]) {
            count[1] -= 1;
        } else if(keyinput[i] === "up" && count[1] < limit[1]){
            count[1] += 1
        }   
    }
    
    return count;
 }