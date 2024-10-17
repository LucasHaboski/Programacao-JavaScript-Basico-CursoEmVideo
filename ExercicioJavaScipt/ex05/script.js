function tabuada(){

    let  num = document.getElementById('num').value
    let print = document.getElementById('tabu')

    if (num === ''){
        window.alert('Digite um numero valido para o programa funcionar!')
        return
    }

    print.innerHTML = ''

    num = Number(num)

    for(let i = 1; i <= 10; i++){
        let option = document.createElement('option')
        option.text = `${num} x ${i} = ${num*i}` 
        option.value = `tab${i}`
        print.add(option) //Da pra utilizar .appenChild
    }

}