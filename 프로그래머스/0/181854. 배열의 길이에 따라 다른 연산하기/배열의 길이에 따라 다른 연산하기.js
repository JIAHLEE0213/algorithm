function solution(arr, n) {
    if(arr.length % 2 !== 0) {
        // 짝수 인덱스에만 +n(0,2,4..)
        return arr.map((el,index) => index % 2 === 0 ? el + n : el);
    } else  {
        return arr.map((el,index) => index % 2 !== 0 ? el + n : el);
    }
}