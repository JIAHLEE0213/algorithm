function solution(numbers, n) {
    let count = 0;
    
    for(let i = 0; i < numbers.length; i++) {
        if(count <= n) count += numbers[i];
    }
    return count;
}