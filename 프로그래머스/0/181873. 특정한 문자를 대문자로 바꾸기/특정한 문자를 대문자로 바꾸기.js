function solution(my_string, alp) {
    return my_string.split('').map(word => word === alp ? word.toUpperCase() : word).join('')
}