function solution(my_string, index_list) {
    let result = [];
    let arr = my_string.split('')
    
    for(let i = 0; i < index_list.length; i++) {
        result.push(arr[index_list[i]])
    }
    return result.join('');
}