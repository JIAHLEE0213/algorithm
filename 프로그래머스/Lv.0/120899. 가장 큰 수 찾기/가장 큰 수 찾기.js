function solution(array) {
    const max = array.reduce((acc,cur) => acc > cur ? acc : cur)
    const index = array.findIndex((el) => el === max)
    return [max,index]
}