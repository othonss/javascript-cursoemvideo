var verificar = document.querySelector('input#btnVerificar')
verificar.addEventListener('click', clicar)

function clicar(){
    var valor = document.getElementById('txtIdade')
    var masculino = document.querySelector('input#masculino')
    var resultado = document.querySelector('div#resultado')
    
    nascimento = Number(valor.value)
    idade = 2022 - nascimento

    var sexo = ''

    if(masculino.checked){
        sexo = 'h'
    }else{
        sexo = 'm'
    }

    if(idade >= 0 && idade < 13 && sexo === 'h'){
        resultado.innerHTML = `<div>Você tem ${idade} anos e é Menino.</div>`
        resultado.innerHTML +='<div><img src="imagens/menino.png" alt="Menino"></div>'
    }else if(idade >= 0 && idade < 13 && sexo === 'm'){
        resultado.innerHTML = `<div>Você tem ${idade} anos e é Menina.</div>`
        resultado.innerHTML += '<div><img src="imagens/menina.png" alt="Menina"></div>'
    }else if(idade >= 13 && idade < 60 && sexo === 'h'){
        resultado.innerHTML = `<div>Você tem ${idade} anos e é Homem.</div>`
        resultado.innerHTML += '<div><img src="imagens/homem.png" alt="Homem"></div>'
    }else if(idade >= 13 && idade < 60 && sexo === 'm'){
        resultado.innerHTML = `<div>Você tem ${idade} anos e é Mulher.</div>`
        resultado.innerHTML += '<div><img src="imagens/mulher.png" alt="Mulher"></div>'
    }else if(idade >= 60 && sexo === 'h'){
        resultado.innerHTML = `<div>Você tem ${idade} anos e é Idoso.</div>`
        resultado.innerHTML += '<div><img src="imagens/idoso.png" alt="Idoso"></div>'
    }else if(idade >= 60 && sexo === 'm'){
        resultado.innerHTML = `<div>Você tem ${idade} anos e é Idosa.</div>`
        resultado.innerHTML += '<div><img src="imagens/idosa.png" alt="Idosa"></div>'
    }

}