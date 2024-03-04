function solution(num_list) {
    const odd = num_list.filter((el) => el%2 === 0);
    const even = num_list.filter((el) => el%2 !== 0);
    
    const oddLink = odd.reduce((acc,cur) => acc+String(cur));
    const evenLink = even.reduce((acc,cur) => acc+String(cur));
    
    return Number(oddLink) + Number(evenLink)
}