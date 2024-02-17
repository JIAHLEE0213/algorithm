function solution(balls, share) {
    // balls : 다 다르게 생긴 구슬의 개수
    function factorial(num) {
        return num <= 1 ? 1 : num * factorial(num-1);
    }
    
    const n = factorial(balls);
    const m = factorial(share);
    const nm = factorial(balls-share);
    
    return Math.round(n / (nm * m));
}