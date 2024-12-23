function solution(n, control) {
    let result = n;
    const obj = {"w" : 1, "s": -1, "d": 10, "a":-10};
    
    for(let i = 0; i < control.length; i++) {
        result += obj[control[i]]
    }
    return result;
}