function solution(M, N) {
    let countM = 0;
    let initM = M
    while(M > 1) {
        countM++
        M--;
    }
    
    let countN = 0
    while(N > 1) {
        countN++
        N--;
    }
    return countM + (countN * initM);
}