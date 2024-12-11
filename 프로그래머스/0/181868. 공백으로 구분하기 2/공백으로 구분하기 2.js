function solution(my_string) {
    let arr = [];
    
    let str = my_string.split(' ');
    
    for(let i = 0; i < str.length; i++) {
        if(str[i] === "") continue;
        
        else {
            arr.push(str[i]);
        }
    }
    
    return arr;
    
}

// function solution(my_string) {
//     // 공백으로 나눈 후 빈 문자열 필터링
//     return my_string.split(' ').filter(word => word !== '');
// }