let num = document.getElementById('numero')
let printar = document.getElementById('mostrar')
let res = document.querySelector('div#res')
let valores = []
let contador = 0
let soma = 0

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){ //indica que o valor não foi encontrado na lista
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))

        let option = document.createElement('option')
        option.text = `Valor ${num.value} adicionado.`
        option.value = `Num${num}`
        printar.add(option)

        res.innerHTML = ''
        soma += Number(num.value)
        contador++
    }else {
        window.alert('Valor invalido, ou ja cadastrado na lista!')
    }
    num.value = ''
    num.focus()
}

function mostraVet(){
    res.innerHTML = ''
    valores.sort((a,b) => a - b)

    if (valores.length === 0){
        window.alert('Adicione numeros ao seu vetor!')
        return
    }

    let total = document.createElement('p')
    total.innerText = `Ao todo, temos ${contador} números cadastrados`
    res.appendChild(total)

    let maior = document.createElement('p')
    maior.innerText = `O maior valor informado foi ${valores[valores.length - 1]}`
    res.appendChild(maior)

    let menor = document.createElement('p')
    menor.innerText = `O menor valor informado foi ${valores[0]}`
    res.appendChild(menor)

    let somar = document.createElement('p')
    somar.innerText = `Somando todos os valores, temos ${soma}.`
    res.appendChild(somar)

    let media = document.createElement('p')
    media.innerText = `A média dos valores digitados é ${(soma / contador).toFixed(2)}`
    res.appendChild(media)
    
}

