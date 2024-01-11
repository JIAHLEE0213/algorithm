function solution(n, t) {
    // n : 마리수, t : 경과 시간
    // 1시간에 n*2
    let num = n
    for (let i = 1; i <= t; i++) {
        // i가 올라갈때 n의 값은 2배가 되어야 함
        num *= 2
    } return num
}