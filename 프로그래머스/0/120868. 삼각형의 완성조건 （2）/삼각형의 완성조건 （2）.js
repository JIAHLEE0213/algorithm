function solution(sides) {
    // 배열 안에 가장 긴변이 있는경우
    // 없는 경우
    const arr = sides.sort((a,b) => b-a);
    
    let count = 0;
    let a = arr[1]
    while(a > 0) {
        count++;
        a--;
    }
    
    let b = arr[0]
    while (b < arr[0] + arr[1]) {
        count++
        b++;
    }
    
    return count-1;
}