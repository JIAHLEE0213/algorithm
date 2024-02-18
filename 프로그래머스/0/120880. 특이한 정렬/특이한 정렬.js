function solution(numlist, n) {
    // n과의 차이가 작게 날수록 앞으로
    const result = numlist.sort((a,b) => {
        let diffA = Math.abs(a-n)
        let diffB = Math.abs(b-n)
        
        if(diffA === diffB) {
            return b-a;
        }
        return diffA-diffB
    })
    return result;
}