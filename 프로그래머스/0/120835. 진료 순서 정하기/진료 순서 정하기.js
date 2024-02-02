function solution(emergency) {
    // 배열의 숫자 순위정하기
    const arr = [...emergency].sort((a,b) => b-a);
    return emergency.map((el) => arr.indexOf(el)+1)   
}