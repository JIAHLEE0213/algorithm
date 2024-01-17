function solution(my_string) {
    const num = [...my_string].filter((el) => !isNaN(Number(el))).map(Number);
    return num.sort((a,b)=>a-b) 
}