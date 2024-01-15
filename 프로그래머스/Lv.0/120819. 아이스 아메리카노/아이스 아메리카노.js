function solution(money) {
    // 커피 한잔은 5500원
    // [마실 수 있는 커피 수량, 잔돈]
    const price = 5500;
    
    const a = Math.floor(money/price) // 몫 구하기
    const b = money % price // 나머지 값 구하기
    return [a,b];
}