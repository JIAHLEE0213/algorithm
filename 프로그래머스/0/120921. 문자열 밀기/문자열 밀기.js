function solution(A, B) {
    let arrA = [...A]
    let arrB = [...B]
    
    for(let i = 0; i < B.length; i++) {
        if(arrA.join('') !== arrB.join('')) {
            arrA.unshift(arrA.pop())
        } else if (arrA.join('') === arrB.join('')) {
            return i;
        }
    }
    return -1;
}