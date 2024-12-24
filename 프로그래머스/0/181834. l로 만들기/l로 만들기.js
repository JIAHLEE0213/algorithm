function solution(myString) {
    let arr = ['a','b','c','d','e','f','g','h','i','j','k'];
    let strArr = myString.split('');
    
    return strArr.map(el => arr.includes(el) ? "l" : el).join('');    
}