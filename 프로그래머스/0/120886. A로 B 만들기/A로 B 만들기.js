function solution(before, after) {
    const changeBefore = [...before].sort().join('')
    const changeAfter = [...after].sort().join('')
    return changeBefore === changeAfter ? 1 : 0
}