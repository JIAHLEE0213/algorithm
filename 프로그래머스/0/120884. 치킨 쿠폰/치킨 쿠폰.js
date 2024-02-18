function solution(chicken) {
    let result = 0;
    
    while(chicken >= 10) {
        result += Math.floor(chicken/10);
        // 서비스 치킨으로 한마리를 더 시킬수 있는 값과 나머지 값 더해주기
        chicken = Math.floor(chicken/10) + chicken % 10;
    }
    
    return result;
}