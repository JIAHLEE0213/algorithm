function solution(n) {
    let count = 0;
    
    if(n % 2 !== 0) {
        for (let i = 1; i<= n; i += 2) {
            count += i;
        } 
    } else  {
        for (let i = 2; i<= n; i += 2) {
            count += i*i;
        } 
    }
    return count;
}