function solution(num, k) {
    // num에서 k의 수와 같은게 잇다면 자리수 return/ 없으면 -1
    const string = String(num)
    const filter =  string.includes(k)
    return filter ? string.indexOf(k)+1 : -1
}