function solution(s) {
    const arr = s.split(' ');
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if(Number(arr[i])) {
            count += Number(arr[i])
        } else if(arr[i] === "Z") {
            count -= Number(arr[i-1])
        }
    }
    return count
}