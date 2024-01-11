function solution(hp) {
    // 장군개미 5, 병정개미 3, 일개미 1
    const ant = [5,3,1]
    let count = 0
    for(let i = 0; i < ant.length; i++) {
        count += Math.floor(hp/ant[i])
        // 위 수식에서 나머지값을 다음 i값과 나눠주는 코드
        hp %=ant[i]
    }
    return count
}