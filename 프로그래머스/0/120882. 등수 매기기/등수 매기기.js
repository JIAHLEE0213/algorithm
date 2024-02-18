function solution(score) {
    // 평균 값내기
    const arr = score.map((el)=> (el[0] + el[1])/2)
    let copyArr = [...arr].sort((a,b) => b-a);
    return arr.map((el) => copyArr.indexOf(el)+1)
}