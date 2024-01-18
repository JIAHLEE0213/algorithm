function solution(numbers, direction) {
    // 오른쪽이면 마지막 원소가 맨앞, 왼쪽이면 첫번째 원소가 맨뒤
    const al = numbers.length - 1 ;
    if (direction==="right") {
        const el = numbers[al];
        numbers.pop(el)
        numbers.unshift(el);
        return numbers
    } else {
        const el = numbers[0];
        numbers.shift(el)
        numbers.push(el);
        return numbers;
    }
}