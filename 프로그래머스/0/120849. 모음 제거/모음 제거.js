function solution(my_string) {
    // 모음 : a,e,i,o,u
    // my_string에 있는 모음 제거
    const chars = my_string.split('') // ex) ['b','u','s']
    const vowels = ['a','e','i','o','u']
    for (let i = 0; i < chars.length; i++) {
         // vowels와 일치한다면 빼주기
        if(vowels.includes(chars[i]))
            chars[i] = '' 
    }
    return chars.join('')
}