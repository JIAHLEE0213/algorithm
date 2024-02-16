function solution(my_str, n) {
    let arr = []
    const str = [...my_str]
    
    while(str.length) {
        arr.push(str.splice(0,n).join(''))
    }
    return arr;
}