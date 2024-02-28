function solution(my_string, n) {
    const num = my_string.length - n;
    return my_string.slice(num, my_string.length);
}