function solution(array) {
    const string = array.join('');
    let count = 0;
    for(let i = 0; i < string.length; i++) {
        if(string[i] === '7') {
            count += 1;
        }
    }
    return count;
}