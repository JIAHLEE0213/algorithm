function solution(price) {
    if (100000 <= price && 300000 > price) {
        return Math.trunc(price - (price*0.05));
    } else if (300000 <= price && 500000 > price) {
        return Math.trunc(price - (price*0.1));
    } else if (500000 <= price) {
        return Math.trunc(price - (price*0.2));
    } else {
        return price;
    }
}