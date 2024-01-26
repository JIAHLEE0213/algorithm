function solution(array) {
    let newArray = array.sort((a,b)=>a-b);
    let result = Math.floor(newArray.length/2);
    return newArray[result];
}