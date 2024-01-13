function solution(cipher, code) {
    // cipher : 암호 문자열 (소문자와 공백으로만 구성), code : 정수
    // code의 배수 번째에 있는 문자열 return
    let str = ''
    for (let i = code -1; i < cipher.length; i +=code) {
        str += cipher[i]
    } return str;
}