function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('anoNascimento')
    var res = document.getElementById('resultado')

    if (fAno.value == 0 || fAno.value > ano) {
        window.alert('ERRO! | Verifique os dados e tente novamente')
    } else {
        var sex = document.getElementsByName('sexo')
        var idade = ano - Number(fAno.value)
        var gen = ''
        if (sex[0].checked){
            gen = 'Homem'
        } else {
            gen = 'Mulher'
        }
        if (gen == 'Homem') {
            if (idade <= 13){
                res.innerHTML = `Detectamos ${gen} com ${idade} anos. <img src = './imagens/homemCriança.jpg' alt='imagemCriancaHomem'>`
            } else if (idade > 13 && idade <= 18){
                res.innerHTML = `Detectamos ${gen} com ${idade} anos. <img src = './imagens/homemAdolescente.jpg' alt='imagemAdolescenteaHomem'>`
            } else if (idade > 18 && idade <= 25) {
                res.innerHTML = `Detectamos ${gen} com ${idade} anos. <img src = './imagens/homemJovem.jpg' alt='imagemJovemHomem'>`
            } else if (idade > 25 && idade <= 50) {
                res.innerHTML = `Detectamos ${gen} com ${idade} anos. <img src = './imagens/homemAdulto.jpg' alt='imagemAdultoHomem'>`
            } else {
                res.innerHTML = `Detectamos ${gen} com ${idade} anos. <img src = './imagens/homemIdoso.jpg' alt='imagemIdosoHomem'>`
            }
        }else {
            if (idade <= 13){
                res.innerHTML = `Detectamos ${gen} com ${idade} anos. <img src = './imagens/mulherCrianca.jpg' alt='imagemCriancaMulher'>`
            } else if (idade > 13 && idade <= 18){
                res.innerHTML = `Detectamos ${gen} com ${idade} anos. <img src = './imagens/mulherAdolescente.jpg' alt='imagemAdolescenteMulher'>`
            } else if (idade > 18 && idade <= 25) {
                res.innerHTML = `Detectamos ${gen} com ${idade} anos. <img src = './imagens/mulherJovem.jpg' alt='imagemJovemMulher'>`
            } else if (idade > 25 && idade <= 50) {
                res.innerHTML = `Detectamos ${gen} com ${idade} anos. <img src = './imagens/mulherAdulta.jpg' alt='imagemAdultoMulher'>`
            } else {
                res.innerHTML = `Detectamos ${gen} com ${idade} anos. <img src = './imagens/mulherIdosa.jpg' alt='imagemIdosoMulher'>`
            }
        }
    }
}