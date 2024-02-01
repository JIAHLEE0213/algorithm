function solution(array, n) {
    // array의 원소의 값과 n에서 차이가 적은걸 return
    const arr = array.sort();
    return arr.reduce((acc, cur) => {
        if(Math.abs(acc - n) > Math.abs(cur - n)) {
            return cur;
        } else {
            return acc; 
        }
    })
}