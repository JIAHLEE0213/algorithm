function solution(i, j, k) {
    // i~j까지의 수 중에 k의 등장 횟수
    // 등장횟수마다 올라갈 count 변수 생성
    let count = 0;
    for (let a = i; a <= j; a++){
        const string = String(a).split('')
        const filt = string.filter((el) => el.includes(String(k)))
        count += filt.length;
    }
    return count;
}