const form = document.querySelector('#form-geral')
const inputNome = document.querySelector('#nome-completo')
const inputTel = document.querySelector('#telefone-numero')

let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()


    let linha = `<tr>`
    linha += `<td> ${inputNome.value}</td>`
    linha += `<td> ${inputTel.value} </td>`
    linha += `</tr>`
    linhas += linha

    const tBody = document.querySelector('#t-body')
    tBody.innerHTML = linhas
    tBody.style.color = 'green'

    inputNome.value = ''
    inputTel.value = ''
})





