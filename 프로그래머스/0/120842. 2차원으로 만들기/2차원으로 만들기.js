function solution(num_list, n) {
    const num = num_list.length/n
    const arr = [];
    for (let i = 0; i < num; i++){
        const newArr = [];
        for(let j = 0; j < n; j++){
            newArr.push(num_list[i*n+j]);
        }
        arr.push(newArr)
    }
    return arr;
}