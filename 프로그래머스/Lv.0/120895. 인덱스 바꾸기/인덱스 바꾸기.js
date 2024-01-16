function solution(my_string, num1, num2) {
    // 배열 : my_string
    const arr = [...my_string];
    [arr[num1], arr[num2]] = [arr[num2], arr[num1]];
    return arr.join('');
}