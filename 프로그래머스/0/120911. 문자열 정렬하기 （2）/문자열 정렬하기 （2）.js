function solution(my_string) {
    const arr = [...my_string].map((el) => el.toLowerCase())
    return arr.sort().join('')
}