function solution(my_string) {
    // 모음 : a,e,i,o,u
    // my_string에 있는 모음 제거
    const chars = my_string.split('')
    const vowels = ['a','e','i','o','u']
    for (let i = 0; i < chars.length; i++) {
        if(vowels.includes(chars[i]))
            chars[i] = ''
    }
    return chars.join('')
}