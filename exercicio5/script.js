let txtNumero = document.querySelector('input#txtNumero')
let txtResultado = document.querySelector('select#selectResultado')
let finalizacao = document.querySelector('div#finalizacao')
let adicionar = document.querySelector('input#btnAdicionar')
let finalizar = document.querySelector('input#btnFinalizar')
let numeros = []
let contador = 0
let maior = 0
let menor = 0
let fimVetor = 0
let somaNumeros = 0
let media = 0

adicionar.addEventListener('click', adicionarNumero)
finalizar.addEventListener('click', finalizarResultado)

function adicionarNumero(){ 
    if(txtNumero.value.length == 0){
        alert('Informe um número para continuar')
    }else if(txtNumero.value < 1 || txtNumero.value > 100){
        alert('Informe um número entre 1 e 100')
    }else if(numeros.indexOf(Number(txtNumero.value)) != -1){
        alert('Informe um número que já não esteja cadastrado')
    }else{
        finalizacao.innerHTML = ''
        let numero = Number(txtNumero.value)
        let item = document.createElement('option')
        item.text += `Valor ${numero} adicionado.`
        txtResultado.appendChild(item)
        numeros.push(numero)
        somaNumeros += numero 
        contador = contador + 1
    }
}


function finalizarResultado(){ 
    if(txtResultado.childElementCount == 0){
        alert('Informe um número para continuar')
    }else{
        numeros.sort((a, b) => a -b)
        fimVetor = numeros.length
        media = somaNumeros/fimVetor
        menor = numeros[0]
        maior = numeros[fimVetor - 1]
        finalizacao.innerHTML = `<p>Ao todo, temos ${contador} números cadastrados.</p>`
        finalizacao.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        finalizacao.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        finalizacao.innerHTML += `<p>Somando todos os valores, temos ${somaNumeros}</p>`
        finalizacao.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
        finalizacao.innerHTML += `<p>Número adicionados em ordem: ${numeros}</p>`
    }
}