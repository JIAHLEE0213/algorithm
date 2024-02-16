function solution(hp) {
    // 장군개미 : 5, 병정개미 : 3, 일개미 : 1
    return Math.floor(hp/5)+Math.floor((hp%5)/3) + Math.floor(((hp%5)%3)/1)
}