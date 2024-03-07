const tabelaBody = document.querySelector('table tbody')
const formulario = document.querySelector('form')
const totalDeContatos = document.querySelector('#total')

formulario.addEventListener('submit', formularioSubmit)

function formularioSubmit( evento ) {
    evento.preventDefault()
    
    const nome = formulario.nome.value
    const telefone = formulario.telefone.value
    
    adicionarNovoContato(nome, telefone)

    formulario.reset()
}

function adicionarNovoContato( nome, telefone ) {
    const linha = document.createElement('tr')
    const colunaNome = document.createElement('td')
    const colunaTelefone = document.createElement('td')

    colunaNome.textContent = nome
    colunaTelefone.textContent = telefone

    linha.append(colunaNome, colunaTelefone)
    tabelaBody.append(linha)

    totalDeContatos.textContent = Number(totalDeContatos.textContent) + 1
}