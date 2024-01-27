function solution(n) {
    const newArr = [...String(n)].map(Number);
    return newArr.reduce((acc, cur) => acc+cur);
}