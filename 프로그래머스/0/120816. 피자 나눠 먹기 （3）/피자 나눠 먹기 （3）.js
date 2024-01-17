function solution(slice, n) {
    if ( slice > n) {
        return 1
    } else {
        return Math.ceil(n/slice)
    }
}