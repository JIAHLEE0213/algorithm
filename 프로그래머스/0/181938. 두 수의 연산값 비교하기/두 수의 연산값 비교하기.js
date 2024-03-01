function solution(a, b) {
    const num = 2 * a * b;
    const str = String(a) + String(b)
    return num < Number(str) ? Number(str) : num ;
}