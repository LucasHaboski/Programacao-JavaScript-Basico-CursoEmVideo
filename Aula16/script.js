function parImp(n) {
    if (n % 2 == 0){
        return 'par'
    } else {
        return 'ímpar'
    }
}

let res = parImp(10)

console.log(res)

function soma(n1=0,n2=0) {
    return n1 + n2
}

console.log(soma(5))

let v = function(x) {
    return x * 2
}

console.log(v(4))

function fatorial (n) {
    let fat = 1
    for(let i = n; i > 1; i--){
        fat *= i
    }
    return fat
}

console.log(fatorial(5))


// forma recursiva

function fatRecursivo(n) {
    if (n == 1){
        return 1
    } else {
        return n * fatRecursivo(n-1)
    }
}

console.log(fatRecursivo(5))