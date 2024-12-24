function solution(myString, pat) {
    let arr = [...myString].map(el => el === "A" ? "B" : "A").join('');
    
    return arr.includes(pat) ? 1 : 0;
}