function solution(arr, intervals) {
    const [a, b] = intervals;
    const arrA = arr.slice(a[0],a[1]+1);
    const arrB = arr.slice(b[0],b[1]+1);
    
    return arrA.concat(arrB);
}