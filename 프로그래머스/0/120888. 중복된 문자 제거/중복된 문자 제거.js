function solution(my_string) {
    // 중복된 문자나 공백 제거
    return [...new Set(my_string)].join('')
    // const arr = [...my_string]
    // return arr.filter((el,index) => arr.indexOf(el) === index).join('')
}