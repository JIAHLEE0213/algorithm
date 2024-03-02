function solution(num_list) {
    let lastIdx = num_list.length - 1;
    let cmpIdx = num_list.length - 2;
    
    if(num_list[lastIdx] <= num_list[cmpIdx]) {
        num_list.push(num_list[lastIdx]*2)
    } else {
        num_list.push(num_list[lastIdx]-num_list[cmpIdx])
    }
    return num_list;
}