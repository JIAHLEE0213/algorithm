function solution(chicken) {
    let result = 0;
    
    while(chicken >= 10) {
        result += Math.floor(chicken/10);
        // 치킨을 시킨만큼 쿠폰을 더 받는 것과 나머지 쿠폰갯수를 더해주기
        chicken = Math.floor(chicken/10) + chicken % 10;
    }
    
    return result;
}