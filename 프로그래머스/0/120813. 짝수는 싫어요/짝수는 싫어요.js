function solution(n) {
    // n은 숫자
    // 1~n 까지의 홀수만으로 된 배열만 return
    let array = []
    for(let i = 1; i <= n; i++){
        i % 2 !== 0 ? array.push(i) : null
    }
    return array;
}