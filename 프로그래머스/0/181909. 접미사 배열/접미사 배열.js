function solution(my_string) {
    let result = [my_string];
    
    for (let i = 1; i < my_string.length; i++) {
        result.push(my_string.slice(i))
    }
    return result.sort();
}