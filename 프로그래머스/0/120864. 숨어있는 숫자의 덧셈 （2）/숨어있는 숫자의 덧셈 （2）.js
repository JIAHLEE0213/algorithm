function solution(my_string) {
    let count = 0; // 숫자인 수 더해주기
    let num = 0; // 연속인 숫자 쌓기 위해 위함

    for (let i = 0; i < my_string.length; i++) {
        // 현재 i가 숫자면 누적, 아니면 더하기
        if (!isNaN(Number(my_string[i]))) {
            num = num * 10 + Number(my_string[i]);
        } else {
            count += num;
            num = 0;
        }
    }

    // 마지막으로 남아있는 숫자를 합산
    count += num;

    return count;
}
