function solution(num_list) {
    const plus = num_list.reduce((acc,cur)=>acc*cur);
    const multi = num_list.reduce((acc,cur)=>acc+cur);
    
    return plus > multi*multi ? 0 : 1;
}