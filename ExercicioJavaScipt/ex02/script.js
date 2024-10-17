var agora = new Date()
var horaDia = agora.getHours()
var hora = document.getElementById('hora')
var img = document.getElementById('imagem')


hora.innerHTML = `<strong>Agora são ${horaDia} horas</strong>`

if (horaDia > 5 && horaDia < 12) {
    img.innerHTML = `<img src='./imagemManhaCerta.jpg'alt = 'imagemManha'>`
    document.body.style.background = '#ffcf67'
} else if (horaDia >= 12 && horaDia <= 18){
    img.innerHTML = `<img src='./imagemTarde.jpg'alt = 'imagemTarde'>`
    document.body.style.background = '#9e6301'
} else {
    document.body.style.background = '#808080'
    img.innerHTML = `<img src='./imagemNoite.jpg'alt = 'imagemNoite'>`
}