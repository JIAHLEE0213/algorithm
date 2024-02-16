function solution(my_string) {
    const arr = [...my_string].filter((el) => !Number.isNaN(Number(el)))
    return arr.reduce((acc,cur) => acc + Number(cur),0);
}