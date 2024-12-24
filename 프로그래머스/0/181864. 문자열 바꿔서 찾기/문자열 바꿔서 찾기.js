function solution(myString, pat) {
    return arr = [...myString].map(el => el === "A" ? "B" : "A").join('').includes(pat) ? 1 : 0;
    
    // return arr.includes(pat) ? 1 : 0;
}