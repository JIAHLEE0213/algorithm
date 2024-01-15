function solution(numbers) {
    // number : 배열
    const lng = numbers.length
    const arr = numbers.sort((a,b) => b-a)
    return arr[0]*arr[1] > arr[lng-2]*arr[lng-1] ? arr[0]*arr[1] : arr[lng-2]*arr[lng-1]
}