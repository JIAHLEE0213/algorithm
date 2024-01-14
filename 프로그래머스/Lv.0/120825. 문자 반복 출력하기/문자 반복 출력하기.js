function solution(my_string, n) {
    const arr = [...my_string]
    const newArr = arr.map((el) => el.repeat(n));
    
    return newArr.join('')
}