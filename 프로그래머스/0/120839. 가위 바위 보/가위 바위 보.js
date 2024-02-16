function solution(rsp) {
    // 가위:2, 바위:0, 보:5
    const rpc = {
        2:0,
        0:5,
        5:2
    }
    
    return [...rsp].map((el) => rpc[el]).join('')
}