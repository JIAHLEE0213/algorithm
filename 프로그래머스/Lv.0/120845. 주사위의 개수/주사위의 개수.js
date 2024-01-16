function solution(box, n) {
    // box : 배열(가로,세로,높이), n : 모서리 길이
    const boxs = box.map((el) => Math.floor(el/n))
    return boxs.reduce((acc,cur) => acc*cur)
}