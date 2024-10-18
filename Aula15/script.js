let num = [1 ,5 ,3 ,4]

num[4] = 9
num.push(7) // adiciona no ultimo elemento
num.sort()

console.log(`nosso vetor é: ${num}`)
console.log(`o vetor ter ${num.length} posições`)
console.log(`o  primeiro valor do vetor é ${num[0]}`)

console.log(`=======================================`)

for(let i = 0; i < num.length; i++) {
    console.log(`posição ${i} = ${num[i]}`)
}

console.log(`=======================================`)

for (let i in num) {
    console.log(`posição ${i} = ${num[i]}`)
}

console.log(`=======================================`)

console.log(`posição do numero 3 = ${num.indexOf(3)}`)