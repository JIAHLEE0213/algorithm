function solution(n) {
    // 1~n까지의 배수의 중 최대 수 구하기
    // 배수는 n보다 크면 안됨
    let result = 1;
    let count = 0;
    for (let i = 1; result <= n; i++ ) {
        result = result * i;
        count++;
    }
    return count - 1;
}