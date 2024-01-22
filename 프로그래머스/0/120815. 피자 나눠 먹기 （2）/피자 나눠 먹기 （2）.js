function solution(n) {
    // 피자는 1판에 6조각씩, n명이 모두 같은 피자의 수를 먹어야 함
    // 반복문으로 6의 배수를 돌려서 n과 6이 나머지가 없을때까지 돌리는 반복문을 만들기
    let pizza = 6
    
    while (true) {
        if(pizza % n === 0) {
            break
        } pizza += 6
    } 
    return pizza / 6
}