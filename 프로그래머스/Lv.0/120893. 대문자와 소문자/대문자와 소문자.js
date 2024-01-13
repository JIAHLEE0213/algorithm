function solution(my_string) {
    // 대문자는 소문자로 소문자는 대문자로
    return [...my_string].map((el) => el.toLowerCase() === el ? el.toUpperCase() : el.toLowerCase()).join('')
}