function solution(my_string, k) {
    let array = []
    let i = 1;
    while(i <= k) {
        array.push(my_string);
        i++
    }
    return array.join('');
}