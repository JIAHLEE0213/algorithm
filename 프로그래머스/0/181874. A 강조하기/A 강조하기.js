function solution(myString) {
    return myString.split('')
        .map((word) => {
        if(word === "a" || word === "A") {
            return word.toUpperCase()
        } else {
            return word.toLowerCase();
        }
    })
        .join('');
}