function solution(n) {
    // 합계를 담을 변수 선언
    let sum = 0
    for(let i = 0; i <= n; i++ ){
        if ( i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}