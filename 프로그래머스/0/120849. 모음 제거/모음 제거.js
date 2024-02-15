function solution(my_string) {
    const arr = ["a","e","i","o","u"]
    return [...my_string].filter((el) => !arr.includes(el)).join('');
}