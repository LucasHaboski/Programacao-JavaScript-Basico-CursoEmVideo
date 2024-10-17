function contar() {

    let ini = document.getElementById('inicio').value
    let fim = document.getElementById('fim').value
    let pas = document.getElementById('passo').value
    let res = document.getElementById('contagem')

    ini = Number(ini)
    fim = Number(fim)
    pas = Number(pas)

    if (ini == '' || fim == '' || pas == '') {
        window.alert('Por favor, digite algum valor nas caixas')
        return
    }

    if (pas <= 0) {
        window.alert('Passo, Invalido! Considerando passo 1')
        pas = 1
    }

    res.innerHTML = ''

    for(let i = ini; i <= fim; i += pas){
        res.innerHTML += `${i} 👉  `
    }
    res.innerHTML += `🏁`


}