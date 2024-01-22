function solution(order) {
    const arr = [3, 6, 9];
    const order_arr = [...String(order)];
    let num = 0;

    // order_arr 배열을 돌면서 arr에 있는 숫자가 있으면 num의 수를 증가시키기
    for (let i = 0; i <= order_arr.length; i++) {
        if (arr.includes(Number(order_arr[i]))) {
            num += 1;
        }
    }

    return num;
}