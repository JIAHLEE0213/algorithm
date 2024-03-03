function solution(a, b) {
    let matchA = String(a) + String(b);
    let matchB = String(b) + String(a);
    
    return matchA < matchB ? Number(matchB) : Number(matchA);
}