function solution(num_list, n) {
    let arr = num_list.slice(n);
    
    for(let i = 0; i < n; i++) {
        arr.push(num_list[i])
    }
    return arr;
}