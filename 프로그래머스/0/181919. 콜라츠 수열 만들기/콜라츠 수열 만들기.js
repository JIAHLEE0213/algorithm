function solution(n) {
   let result = [];
    
    while(n !== 1) {
        if(n % 2 === 0) {
            result.push(n);
            n = n / 2;
        } else {
            result.push(n);
            n = 3 * n + 1;
        }
    } 
    
    result.push(1);
    return result;
}