function solution(n) {
    // 1~10까지의 합성수 찾기
    let result = 0
    for (let i = 1; i <= n; i++) {
            let count = 0
        for(let j = 1; j <= i; j++){
            if(i % j === 0) {
                count++
            }
        }
        if(count >= 3) {
             result++
        }
    }
    return result;
}