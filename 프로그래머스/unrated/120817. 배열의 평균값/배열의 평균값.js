function solution(numbers) {
    let sum = numbers.reduce((a,b) => a + b)
    let average = sum/numbers.length;
    return average;
}