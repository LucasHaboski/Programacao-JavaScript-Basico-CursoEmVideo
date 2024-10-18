let num = [1 ,15 ,3 ,9]

num[4] = 20
num.push(17) // adiciona no ultimo elemento
num.sort((a,b) => a - b) //garante que os numeros sejam ordenados corretamente, Se a for menor que b, a função retorna um valor negativo, iguais retorna 0 e se a > b retorna um positivo

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